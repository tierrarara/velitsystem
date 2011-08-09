<?php

class Desktop_IndexSuccessView extends AppDesktopBaseView {
	public function executeHtml(AgaviRequestDataHolder $rd) {
		$this->setupHtml ( $rd );
		
		$this->setAttribute ( '_title', 'Index Action HTML' );
	}
	
	public function executeJson(AgaviRequestDataHolder $rd) {
		$this->setupHtml ( $rd );
		// TODO: panatalla inicial segun usuario
		$this->_writter->view = 'DesktopIndex';
	}
}