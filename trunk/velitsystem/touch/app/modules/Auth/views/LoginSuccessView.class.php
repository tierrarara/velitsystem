<?php

class Auth_LoginSuccessView extends AppAuthBaseView
{
	public function executeHtml(AgaviRequestDataHolder $rd)
	{
		$this->setupHtml($rd);
		
		$this->setAttribute('_title', 'Login');
	}
}

?>