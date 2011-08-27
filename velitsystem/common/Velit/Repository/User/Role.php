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

class Velit_Repository_User_Role extends Zend_Db_Table {
	
	protected $_name = 'user_role';
	
	protected $_rowClass = 'Velit_Model_User_Role';
	
	protected $_referenceMap = array (
			'Role' => array (
					'columns' => '_dex_row_role_id', 
					'refTableClass' => 'Velit_Repository_Role', 
					'refColumns' => '_dex_row_role_id' 
			), 
			'User' => array (
					'columns' => '_dex_row_user_id', 
					'refTableClass' => 'Velit_Repository_User', 
					'refColumns' => '_dex_row_user_id' 
			) 
	);
}
