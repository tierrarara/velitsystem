<?php

class Auth_AutenticatedSuccessView extends AppAuthBaseView
{
	public function executeHtml(AgaviRequestDataHolder $rd)
	{
		$this->setupHtml($rd);
		
		$this->setAttribute('_title', 'Autenticated');
	}
}

?>