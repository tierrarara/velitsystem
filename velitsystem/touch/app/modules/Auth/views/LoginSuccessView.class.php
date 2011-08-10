<?php

class Auth_LoginSuccessView extends AppAuthBaseView {
	
	public function executeJson(AgaviRequestDataHolder $rd) {
		$this->setupHtml ( $rd );
		
		$this->_writter->data = array (array ('name' => 'Rafael', 'lastname' => 'Guerrero' ) );
		// este no genera request adicional, por que no llama al controlador Desktop-index en el cliente
		// sino que carga de una vez la vista
		//$this->_writter->view = 'desktopindex';
		
		$this->_writter->dispatch = array('controller' => 'Desktop', 'action' => 'Index');
		
	}
}
