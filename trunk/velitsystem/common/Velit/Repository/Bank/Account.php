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

class Velit_Repository_Bank_Account extends Zend_Db_Table {

	protected $_name = 'bank_account';
	
	protected $_rowClass = 'Velit_Model_Bank_Account';
	
	protected $_referenceMap = array (
			'Bank' => array (
					'columns' => '_dex_row_bank_id', 
					'refTableClass' => 'Velit_Repository_Bank', 
					'refColumns' => '_dex_row_bank_id' 
			)
	);
}
