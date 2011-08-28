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

class Velit_Repository_Zone extends Zend_Db_Table {

	protected $_name = 'zone';
	
	protected $_rowClass = 'Velit_Model_Zone';
	
	protected $_referenceMap = array (
			'Branch' => array (
					'columns' => '_dex_row_branch_id', 
					'refTableClass' => 'Velit_Repository_Branch', 
					'refColumns' => '_dex_row_branch_id' 
			)
	);
}
