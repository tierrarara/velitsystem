<?php

class Auth_LoginAction extends AppAuthBaseAction {
	
	public function executeRead(AgaviRequestDataHolder $rd) {
		
		//$this->setAttribute('message', null);
		
		//$this->setAttribute('success', null);
		
		return 'Input';
	}
	
	public function executeWrite(AgaviRequestDataHolder $rd) {
		
		// buscar usuario en la bd

		$this->getContext ()->getUser ()->setAuthenticated ( true );
		
		$this->setAttribute('message', 'User is Authenticated Successfull');
		
		$this->setAttribute('success', true);
		
		return 'Success';
	}
	
	public function validateWrite(AgaviRequestDataHolder $rd) {
		// validando la data
		
		if ($rd->getParameter('username') === 'demo' && $rd->getParameter('password') === 'demo'){
			return true;
		}
		
		return false;
	}
	
	public function handleWriteError(AgaviRequestDataHolder $rd) {

		$this->setAttribute('success', false);
		
		$this->setAttribute('message', 'Invalid Username');
		
		//sleep(10); // probando mascara del formulario
		
		return 'Input';
	}
}

?>