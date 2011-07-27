<?php

class Test_IndexSuccessView extends AppTestBaseView
{
	public function executeHtml(AgaviRequestDataHolder $rd)
	{
		$this->setupHtml($rd);
		
		$this->setAttribute('_title', 'Text - Index');
	}
	
	public function executeJson(AgaviRequestDataHolder $rd)
	{
		$this->setupHtml($rd);
		
		$l = $this->getAttribute('l');
		
		$this->setAttribute('l', json_encode($l));
	}
}

?>