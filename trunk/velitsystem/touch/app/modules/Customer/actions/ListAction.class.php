<?php

class Customer_ListAction extends AppCustomerBaseAction {
	
	public function validateRead(AgaviRequestDataHolder $rd) {
		// los parametros se pueden validar tambien en el routing
		// key day, filter text
		

		return true;
	
	}
	
	public function executeRead(AgaviRequestDataHolder $rd) {
		
		// for debug, filter is array
		$filter = Zend_Json::decode($rd->getParameter('filter'));
		
		$property = $filter[0]['property'];
		$value = $filter[0]['value'];
		
		// create customer model repository for consulting multiple objects
		$list = array (
				array (
						'_dex_row_customer_id' => 1, 
						'name' => 'Customer 1', 
						'address1' => 'Customer Address 1' 
				), 
				array (
						'_dex_row_customer_id' => 2, 
						'name' => 'Customer 2', 
						'address1' => 'Customer Address 2' 
				), 
				array (
						'_dex_row_customer_id' => 3, 
						'name' => 'Customer 3', 
						'address1' => 'Customer Address 3' 
				), 
				array (
						'_dex_row_customer_id' => 4, 
						'name' => 'Customer 4', 
						'address1' => 'Customer Address 4' 
				), 
				array (
						'_dex_row_customer_id' => 5, 
						'name' => 'Customer 5', 
						'address1' => 'Customer Address 5' 
				) 
		);
		
		$total = 5;
		
		$this->setAttributes ( array (
				'list' => $list, 
				'total' => $total 
		) );
		
		return 'Success';
	}
	
	public function handleReadError(AgaviRequestDataHolder $rd) {
		return 'Error';
	}

}