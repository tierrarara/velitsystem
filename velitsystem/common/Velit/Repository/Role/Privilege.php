<?php

/**
 * 
 * @category   Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    Repository
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

class Velit_Repository_Role_Privilege extends Zend_Db_Table {

	protected $_name = 'role_privilege';
	
	protected $_rowClass = 'Velit_Model_Role_Privilege';
	
	protected $_referenceMap = array (
			'Role' => array (
					'columns' => '_dex_row_role_id', 
					'refTableClass' => 'Velit_Repository_Role', 
					'refColumns' => '_dex_row_role_id' 
			), 
			'Privilege' => array (
					'columns' => '_dex_row_privilege_id', 
					'refTableClass' => 'Velit_Repository_Privilege', 
					'refColumns' => '_dex_row_privilege_id' 
			) 
	);
}