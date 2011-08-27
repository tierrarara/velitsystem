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

class Velit_Repository_Company_User extends Zend_Db_Table {
	
	protected $_name = 'company_user';
	
	protected $_rowClass = 'Velit_Model_Company_User';
	
	protected $_referenceMap = array (
			'Company' => array (
					'columns' => '_dex_row_company_id', 
					'refTableClass' => 'Velit_Repository_Company', 
					'refColumns' => '_dex_row_company_id' 
			), 
			
			'User' => array (
					'columns' => '_dex_row_user_id', 
					'refTableClass' => 'Velit_Repository_User', 
					'refColumns' => '_dex_row_user_id' 
			) 
	);

}
