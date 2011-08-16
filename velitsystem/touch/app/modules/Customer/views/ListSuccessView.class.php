<?php

class Customer_ListSuccessView extends AppCustomerBaseView
{
	public function executeHtml(AgaviRequestDataHolder $rd)
	{
		$this->setupHtml($rd);
		
		$this->setAttribute('_title', 'List');
	}
}

?>