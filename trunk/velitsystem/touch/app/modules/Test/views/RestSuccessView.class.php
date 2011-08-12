<?php

class Test_RestSuccessView extends AppTestBaseView {
	
	public function executeJson(AgaviRequestDataHolder $rd) {
		$this->setupHtml ( $rd );
		
		$this->_writter->data = array (
				array ('num' => 1, 'name'=> 'nombre 1', 'description' => 'description one'), 
				array ('num' => 2, 'name'=> 'nombre 2', 'description' => 'description two') );
	
	}

}
