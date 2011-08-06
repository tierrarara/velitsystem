<?php
/**
 * @category  Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @copyright  Velit System
 * @license  
 * @version $Id$
 */

class Auth_LoginInputView extends AppAuthBaseView {
	
	public function executeJson(AgaviRequestDataHolder $rd) {
		$this->setupHtml ( $rd );
		
		$this->setAttribute ( '_title', 'Login' );
		
		$this->_writter->view = strtolower($this->getContainer()->getModuleName()) .  ucfirst($this->getContainer()->getActionName());
		
	}
	
}
