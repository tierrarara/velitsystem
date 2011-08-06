<?php

class Desktop_InitSuccessView extends AppDesktopBaseView
{
	public function executeHtml(AgaviRequestDataHolder $rd)
	{
		$this->setupHtml($rd);
		
		$this->setAttribute('_title', 'Init');
	}
}

?>