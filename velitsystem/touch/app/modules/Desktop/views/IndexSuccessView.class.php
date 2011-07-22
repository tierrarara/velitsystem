<?php

class Desktop_IndexSuccessView extends AppDesktopBaseView
{
	public function executeHtml(AgaviRequestDataHolder $rd)
	{
		$this->setupHtml($rd);
		
		$this->setAttribute('_title', 'Index');
	}
}

?>