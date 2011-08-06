<?php

class Error_Error404SuccessView extends AppErrorBaseView {
	public function executeHtml(AgaviRequestDataHolder $rd) {
		$this->setAttribute ( '_title', '404 Not Found', 'simple' );
		
		$this->setupHtml ( $rd );
		
		$this->getResponse ()->setHttpStatusCode ( '404' );
	}
	
	public function executeJson(AgaviRequestDataHolder $rd) {
		$this->setAttribute ( '_title', '404 Not Found', 'simple' );
		
		$this->setupHtml ( $rd );
		
		$this->getResponse ()->setHttpStatusCode ( '404' );
	}
}

?>