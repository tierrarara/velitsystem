<?php

class Test_IndexAction extends AppTestBaseAction
{
	/**
	 * Returns the default view if the action does not serve the request
	 * method used.
	 *
	 * @return     mixed <ul>
	 *                     <li>A string containing the view name associated
	 *                     with this action; or</li>
	 *                     <li>An array with two indices: the parent module
	 *                     of the view to be executed and the view to be
	 *                     executed.</li>
	 *                   </ul>
	 */
	public function getDefaultViewName()
	{
		// conectado a la base de datos. // colocar automatico
		$this->getContext()->getDatabaseConnection();
		
		$table = new Zend_Db_Table('test_1');
		
		$rowset = $table->fetchAll();

		$this->setAttribute('l', $rowset->toArray());
		
		return 'Success';
	}
}

?>