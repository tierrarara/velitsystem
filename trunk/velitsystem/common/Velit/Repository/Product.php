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

class Velit_Repository_Product extends Zend_Db_Table {
	
	protected $_name = 'product';
	
	protected $_rowClass = 'Velit_Model_Product';
	
	protected $_referenceMap = array (
			'Company' => array (
					'columns' => '_dex_row_company_id', 
					'refTableClass' => 'Velit_Model_Company', 
					'refColumns' => '_dex_row_company_id' 
			) 
	);
}
