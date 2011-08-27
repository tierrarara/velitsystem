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

class Velit_Repository_Customer_Address extends Zend_Db_Table {

	protected $_name = 'customer_address';
	
	protected $_rowClass = 'Velit_Model_Customer_Address';
	
	protected $_referenceMap = array (
			'Branch' => array (
					'columns' => '_dex_row_customer_id', 
					'refTableClass' => 'Velit_Repository_Customer', 
					'refColumns' => '_dex_row_customer_id' 
			) 
	);
}
