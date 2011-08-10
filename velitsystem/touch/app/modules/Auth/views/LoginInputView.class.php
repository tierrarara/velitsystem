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
		
		$this->_writter->message = $this->getAttribute('message','');
		
		$this->_writter->success =  $this->getAttribute('success', true);
		
		$this->_writter->dispatch = array(
			'controller' => 'Auth',
			'action' => 'form'
		);

		//$this->_writter->view = strtolower($this->getContainer()->getModuleName()) .  ucfirst($this->getContainer()->getActionName());

	}
	
}
