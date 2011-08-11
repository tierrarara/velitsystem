<?php

class Error_Error404SuccessView extends AppErrorBaseView {
	public function executeHtml(AgaviRequestDataHolder $rd) {
		$this->setAttribute ( '_title', '404 Not Found', 'simple' );
		
		$this->setupHtml ( $rd );
		
		$this->getResponse ()->setHttpStatusCode ( '404' );
	}
	
	public function executeJson(AgaviRequestDataHolder $rd) {

		$this->setupHtml ( $rd );
		
		$this->getResponse ()->setHttpStatusCode ( '404' );
		
		$this->getLayer('content')->setTemplate('Error404SuccessJson');
		
		$this->_writter->success = false;
		
		$this->_writter->message = 'Page Not Found';
	}
}