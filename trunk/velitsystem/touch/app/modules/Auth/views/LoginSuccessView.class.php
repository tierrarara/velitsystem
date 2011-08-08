<?php

class Auth_LoginSuccessView extends AppAuthBaseView {
	
	public function executeJson(AgaviRequestDataHolder $rd) {
		$this->setupHtml ( $rd );
		
		$this->_writter->data = array (array ('name' => 'Rafael', 'lastname' => 'Guerrero' ) );
		$this->_writter->view = 'desktopindex';
		
	}
}

?>