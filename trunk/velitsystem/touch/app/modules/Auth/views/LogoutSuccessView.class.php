<?php

class Auth_LogoutSuccessView extends AppAuthBaseView {
	
	public function executeJson(AgaviRequestDataHolder $rd) {

		$this->setupHtml ( $rd );
		
		$this->_writter->view = 'AuthLogin';
	
	}
}
