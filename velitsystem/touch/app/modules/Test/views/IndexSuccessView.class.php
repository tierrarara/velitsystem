<?php

class Test_IndexSuccessView extends AppTestBaseView
{
	public function executeHtml(AgaviRequestDataHolder $rd)
	{
		$this->setupHtml($rd);
		
		$this->setAttribute('_title', 'Index');
	}
}

?>