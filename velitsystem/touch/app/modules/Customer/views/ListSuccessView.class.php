<?php

class Customer_ListSuccessView extends AppCustomerBaseView {
	
	public function executeJson(AgaviRequestDataHolder $rd) {
		$this->setupHtml ( $rd );
		
		$this->_writter->data = $this->getAttribute('list');
		
		$this->_writter->total = $this->getAttribute('total');
		
		// for debug
		$filter = Zend_Json::decode($rd->getParameter('filter'));
		
		$property = $filter[0]['property'];
		//$value = $filter[0]['value'];
		
		$this->_writter->property = $property;
	
	}
}