<?php

class Test_ModelSuccessView extends AppTestBaseView
{
	public function executeHtml(AgaviRequestDataHolder $rd)
	{
		$this->setupHtml($rd);
		
		$this->setAttribute('_title', 'Model');
	}
}

?>