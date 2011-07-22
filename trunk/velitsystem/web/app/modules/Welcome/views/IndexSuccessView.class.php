<?php

class Welcome_IndexSuccessView extends AppWelcomeBaseView
{
	public function executeHtml(AgaviRequestDataHolder $rd)
	{
		// we load a "simple" layout with just one template layer
		// as this is a special welcome page, completely standalone
		$this->setupHtml($rd, 'simple');
		
		$this->setAttribute('agavi_release', AgaviConfig::get('agavi.release'));
	}
}

?>