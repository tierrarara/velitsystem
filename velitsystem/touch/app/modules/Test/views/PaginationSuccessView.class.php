<?php

class Test_PaginationSuccessView extends AppTestBaseView {
	
	public function executeJson(AgaviRequestDataHolder $rd) {
		$this->setupHtml ( $rd );
		
		$start = $rd->getParameter ( 'start', 0 );
		
		switch ($start) {
			case 1 :
				$data = array (
						array (
						'id' => 2, 
						'name' => 'Rodolfo' ) );
				break;
			
			case 2 :
				$data = array (
						array (
						'id' => 3, 
						'name' => 'Gabriel' ) );
				break;
			
			case 3 :
				$data = array (
						array (
						'id' => 4, 
						'name' => 'Julian' ) );
				break;
			
			case 4 :
				$data = array (
						array (
								'id' => 5, 
								'name' => 'Cesar' ) );
				break;
			
			case 5 :
				$data = array (
						array (
								'id' => 6, 
								'name' => 'Otro' ) );
				break;
			
			default :
				$data = array (
						array (
								'id' => 1, 
								'name' => 'Rafael' ) );
				break;
		}
		
		$this->_writter->data = $data;
		
		$this->_writter->total= 5;
	
	}
}
