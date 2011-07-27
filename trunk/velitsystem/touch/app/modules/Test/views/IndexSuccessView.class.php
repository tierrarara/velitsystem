<?php

class Test_IndexSuccessView extends AppTestBaseView {
	
	public function executeHtml(AgaviRequestDataHolder $rd) {
		
		$this->setupHtml ( $rd, 'simple' ); // no cargue el template dentro del Master

		$this->setAttribute ( '_title', 'Text - Index' );
		
		$l = $this->getAttribute ( 'l' );
		
		$this->setAttribute ( 'l', 'Array convertido a cadena: ' . print_r ( $l, true ) );
	
	}
	
	public function executeJson(AgaviRequestDataHolder $rd) {
		
		$this->setupHtml ( $rd );
		
		$l = $this->getAttribute ( 'l' );
		
		$this->setAttribute ( 'l', json_encode ( $l ) );
	}
}

?>