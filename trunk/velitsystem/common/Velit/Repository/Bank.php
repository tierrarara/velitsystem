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

class Velit_Repository_Bank extends Zend_Db_Table {

	protected $_name = 'bank';
	
	protected $_rowClass = 'Velit_Model_Bank';
	
	protected $_referenceMap = array (
			'Country' => array (
					'columns' => '_dex_row_country_id', 
					'refTableClass' => 'Velit_Repository_Country', 
					'refColumns' => '_dex_row_country_id' 
			)
	);
}
