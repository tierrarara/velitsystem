<?php

class Auth_LoginInputView extends AppAuthBaseView {
	public function executeHtml(AgaviRequestDataHolder $rd) {
		$this->setupHtml ( $rd );
		
		$this->setAttribute ( '_title', 'Login' );
	}
	
}

?>