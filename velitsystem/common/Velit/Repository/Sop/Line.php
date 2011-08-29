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

class Velit_Repository_Sop_Line extends Zend_Db_Table {
	
	protected $_name = 'sop_line';
	
	protected $_rowClass = 'Velit_Model_Sop_Line';
	
	protected $_referenceMap = array (
			'Header' => array (
					'columns' => '_dex_row_sop_header_id', 
					'refTableClass' => 'Velit_Repository_Sop_Header', 
					'refColumns' => '_dex_row_warehouse_sop_id' 
			), 
			'Product' => array (
					'columns' => '_dex_row_product_id', 
					'refTableClass' => 'Velit_Repository_Product', 
					'refColumns' => '_dex_row_product_id' 
			) 
	);
}
