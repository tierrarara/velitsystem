<?php

class Desktop_MenuSuccessView extends AppDesktopBaseView {
	
	public function executeJson(AgaviRequestDataHolder $rd) {

		$this->setupHtml ( $rd );
		
		$this->_writter->data = $this->getAttribute('menu');
	
	}
}
