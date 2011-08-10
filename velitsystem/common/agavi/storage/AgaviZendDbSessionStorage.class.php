<?php

class AgaviZendDbSessionStorage extends AgaviSessionStorage {

	/**
	 * @var        Zend_Db_Adapter_Abstract db conections
	 */
	protected $resource = null;

	/**
	 * Initialize this Storage.
	 *
	 * @param      AgaviContext An AgaviContext instance.
	 * @param      array        An associative array of initialization parameters.
	 *
	 * @throws     <b>AgaviInitializationException</b> If an error occurs while
	 *                                                 initializing this Storage.
	 *
	 * @author     Sean Kerr <skerr@mojavi.org>
	 * @since      0.9.0
	 */
	public function initialize(AgaviContext $context, array $parameters = array())
	{
		// initialize the parent
		parent::initialize($context, $parameters);

		if(!$this->hasParameter('db_table')) {
			// missing required 'db_table' parameter
			$error = 'Factory configuration file is missing required "db_table" parameter for the Storage category';
			throw new AgaviInitializationException($error);
		}

		// use this object as the session handler
		session_set_save_handler(
			array($this, 'sessionOpen'),
			array($this, 'sessionClose'),
			array($this, 'sessionRead'),
			array($this, 'sessionWrite'),
			array($this, 'sessionDestroy'),
			array($this, 'sessionGC')
		);
	}

	/**
	 * Close a session.
	 *
	 * @return     bool true, if the session was closed, otherwise false.
	 *
	 * @author     Sean Kerr <skerr@mojavi.org>
	 * @since      0.9.0
	 */
	public function sessionClose()
	{
		if($this->resource) {
			// auto database close connection 
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Destroy a session.
	 *
	 * @param      string A session ID.
	 *
	 * @return     bool true, if the session was destroyed, otherwise an
	 *                  exception is thrown.
	 *
	 * @throws     <b>AgaviDatabaseException</b> If the session cannot be 
	 *                                           destroyed.
	 *
	 * @author     Sean Kerr <skerr@mojavi.org>
	 * @since      0.9.0
	 */
	public function sessionDestroy($id)
	{
		if(!$this->resource) {
			return false;
		}
		
		// get table/column
		$db_table  = $this->getParameter('db_table');
		$db_id_col = $this->getParameter('db_id_col', 'sess_id');

		// cleanup the session id, just in case
		$id = addslashes($id);

		// delete the record associated with this id
		$sql = sprintf("DELETE FROM %s WHERE %s = '%s'", $db_table, $db_id_col, $id);

		if($this->resource->query($sql)) {
			return true;
		}

		// failed to destroy session
		$error = "No se pudo destruir la session";
		throw new AgaviDatabaseException($error);
	}

	/**
	 * Cleanup old sessions.
	 *
	 * @param      int The lifetime of a session.
	 *
	 * @return     bool true, if old sessions have been cleaned, otherwise an
	 *                  exception is thrown.
	 *
	 * @throws     <b>AgaviDatabaseException</b> If old sessions cannot be 
	 *                                           cleaned.
	 *
	 * @author     Sean Kerr <skerr@mojavi.org>
	 * @since      0.9.0
	 */
	public function sessionGC($lifetime)
	{
		if(!$this->resource) {
			return false;
		}
		
		// determine deletable session time
		$time = time() - $lifetime;

		// get table/column
		$db_table    = $this->getParameter('db_table');
		$db_time_col = $this->getParameter('db_time_col', 'sess_time');

		$ts = date($this->getParameter('date_format', 'U'), $time);
		if(is_numeric($ts)) {
			$ts = (int)$ts;
		} else {
			$ts = "'" . addslashes($ts) . "'";
		}
		
		// delete the records that are expired
		$sql = sprintf("DELETE FROM %s WHERE %s < %s", $db_table, $db_time_col, $ts);

		if($this->resource->query($sql)) {
			return true;
		}

		// failed to cleanup old sessions
		$error = 'PostgreSQLSessionStorage cannot delete old sessions, error reported by server: "%s"';
		$error = sprintf($error, pg_last_error($this->resource));
		throw new AgaviDatabaseException($error);
	}

	/**
	 * Open a session.
	 *
	 * @param      string The path is ignored.
	 * @param      string The name is ignored.
	 *
	 * @return     bool true, if the session was opened, otherwise an exception
	 *                  is thrown.
	 *
	 * @throws     <b>AgaviDatabaseException</b> If a connection with the database
	 *                                           does not exist or cannot be
	 *                                           created.
	 *
	 * @author     Sean Kerr <skerr@mojavi.org>
	 * @since      0.9.0
	 */
	public function sessionOpen($path, $name)
	{
		// what database are we using?
		$database = $this->getParameter('database', null);

		// get the database resource
		$this->resource = $this->getContext()->getDatabaseConnection($database);

		return true;
	}

	/**
	 * Read a session.
	 *
	 * @param      string A session ID.
	 *
	 * @return     bool true, if the session was read, otherwise an exception is
	 *                  thrown.
	 *
	 * @throws     <b>AgaviDatabaseException</b> If the session cannot be read.
	 *
	 * @author     Sean Kerr <skerr@mojavi.org>
	 * @since      0.9.0
	 */
	public function sessionRead($id)
	{
		if(!$this->resource) {
			return false;
		}
		
		// get table/column
		$db_table    = $this->getParameter('db_table');
		$db_data_col = $this->getParameter('db_data_col', 'sess_data');
		$db_id_col   = $this->getParameter('db_id_col', 'sess_id');
		$db_time_col = $this->getParameter('db_time_col', 'sess_time');

		// cleanup the session id, just in case
		$id = addslashes($id);

		// retrieve the record associated with this id
		$sql = sprintf("SELECT %s FROM %s WHERE %s = '%s'", $db_data_col, $db_table, $db_id_col, $id);

		@$this->resource->fetchCol($sql);
		
		//if($result != false && @pg_num_rows($result) == 1) {
		if($rows = $this->resource->fetchCol($sql) && count($rows)) {
			// found the session
			return $rows[0];
		} else {
			return '';
		}
	}

	/**
	 * Write session data.
	 *
	 * @param      string A session ID.
	 * @param      string A serialized chunk of session data.
	 *
	 * @return     bool true, if the session was written, otherwise an exception
	 *                  is thrown.
	 *
	 * @throws     <b>AgaviDatabaseException</b> If the session data cannot be 
	 *                                           written.
	 *
	 * @author     Sean Kerr <skerr@mojavi.org>
	 * @author     Rafael Guerrero <tierrarara@gmail.com>
	 * @since      0.9.0
	 */
	public function sessionWrite($id, &$data)
	{
		if(!$this->resource) {
			return false;
		}
		
		// get table/column
		$db_table    = $this->getParameter('db_table');
		$db_data_col = $this->getParameter('db_data_col', 'sess_data');
		$db_id_col   = $this->getParameter('db_id_col', 'sess_id');
		$db_time_col = $this->getParameter('db_time_col', 'sess_time');

		// cleanup the session id and data, just in case
		$id   = addslashes($id);
		$data = addslashes($data);

		$ts = date($this->getParameter('date_format', 'U'));
		if(is_numeric($ts)) {
			$ts = (int)$ts;
		} else {
			$ts = "'" . addslashes($ts) . "'";
		}

		
		$dataTable = array(
			$db_data_col => $data,
			$db_time_col => $ts
		);
		
		try {
			$affectedRows =  $this->resource->update($db_table, $dataTable, "$db_id_col = '$id'");
			
			if ($affectedRows < 1) {
				
				$dataTable [$db_time_col] = $id;
				
				// session does not exist, create it
				$this->resource->insert($db_table, $dataTable);
			}
			
			return true;
			
			
		}catch (Exception $e) {
			throw new AgaviDatabaseException('failed to write session data - ' . $e->getMessage());
		}
		
		throw new AgaviDatabaseException('No try to write session data - ' . $e->getMessage());
		
	}
	
}
