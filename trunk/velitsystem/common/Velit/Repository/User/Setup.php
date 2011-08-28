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

class Velit_Repository_User_Setup extends Zend_Db_Table {

	protected $_name = 'user_setup';
	
	protected $_rowClass = 'Velit_Model_User_Setup';
	
	protected $_referenceMap = array (
			'User' => array (
					'columns' => '_dex_row_user_id', 
					'refTableClass' => 'Velit_Repository_User', 
					'refColumns' => '_dex_row_user_id' 
			) 
	);
}
