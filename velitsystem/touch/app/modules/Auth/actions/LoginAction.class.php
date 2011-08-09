<?php

class Auth_LoginAction extends AppAuthBaseAction {
	
	public function executeRead(AgaviRequestDataHolder $rd) {
		return 'Input';
	}
	
	public function executeWrite(AgaviRequestDataHolder $rd) {
		
		// buscar usuario en la bd
		

		$this->getContext ()->getUser ()->setAuthenticated ( true );
		
		return 'Success';
	}
	
	public function validateWrite(AgaviRequestDataHolder $rd) {
		// validando la data
		

		return true;
	}
}

?>