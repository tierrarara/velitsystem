<?php

/**
 * @author tierrarara
 * Modelo de conexion de agavi con Zend Adapter
 *
 */

class AgaviZendManager extends AgaviDatabase {

	protected function connect() {
		// TODO:
		$method = $this->getParameter('method', 'normal');

		switch ($method) {
			case 'normal' :
				// get parameters normally
				$database = $this->getParameter('database');
				$host = $this->getParameter('host', 'localhost');
				$password = $this->getParameter('password');
				$user = $this->getParameter('username');
				$adapter = $this->getParameter('adapter');
				$fetchMode = $this->getParameter('fetchmode', Zend_Db :: FETCH_OBJ);
				$encoding = $this->getParameter('encoding', 'utf8');
				break;

			default:
				throw new AgaviDatabaseException("Invalid AgaviZendDatabase method '$method'");
		}

		$config = array (
			'dbname' => $database,
			'host' => $host,
			'username' => $user,
			'password' => $password /*,
		'fetchMode' => $fetchMode,
		'adapterNamespace' => ?????*/
		);

		// +---------------------------------------------------------------------------+
		// | Zend_Db_Table_Abstract Cache                                              |
		// +---------------------------------------------------------------------------+
		if(AgaviConfig :: get('project.db_cache')) {
			self::activateCache();
		}

		$this->connection = Zend_Db :: factory($adapter, $config);

		$this->connection->setFetchMode($fetchMode);

		if(strtolower($adapter) == 'pdo_mysql') {
			$this->connection->query("SET NAMES " . $encoding);

			$this->connection->query("SET CHARSET " . $encoding);
		}

		Zend_Db_Table_Abstract :: setDefaultAdapter($this->connection);
	}

	public function shutdown() {

		if (!is_null($this->connection)) {
			$this->connection->closeConnection();
		}
	}

	/**
	 * @return bool
	 */
	static public function activateCache() {

		if (!AgaviConfig :: get('project.db_cache')) {
			return false;
		}

		$frontendOptions = array (
			'automatic_serialization' => true
		);

		$backendOptions = array (
			'cache_dir' => AgaviConfig :: get('core.cache_dir'),
			'file_name_prefix' => AgaviConfig :: get('project.name')
		);

		$cache = Zend_Cache :: factory('Core', 'File', $frontendOptions, $backendOptions);

		Zend_Db_Table_Abstract :: setDefaultMetadataCache($cache);
	}
}
?>