<?php

/**
 * 
 * Carga el menu para el usuario actual
 * 
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    Velit_Response
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

class Desktop_MenuAction extends AppDesktopBaseAction {
	
	public function executeRead(AgaviRequestDataHolder $rd) {
		
		//$this->getContext()->getUser();
		

		$menu = array (
				array (
						'_dex_row_menu_id' => 1, 
						'name' => 'Start Day', 
						'description' => 'Start Day Operations', 
						'controller' => '', 
						'action' => '' ), 
				array (
						'_dex_row_menu_id' => 2, 
						'name' => 'Customer Attention', 
						'description' => 'Customers Operations', 
						'controller' => '', 
						'action' => '' ), 
				array (
						'_dex_row_menu_id' => 3, 
						'name' => 'Movements', 
						'description' => 'Movements Operations', 
						'controller' => '', 
						'action' => '' ), 
				array (
						'_dex_row_menu_id' => 4, 
						'name' => 'Queries', 
						'description' => 'Queries Operations', 
						'controller' => '', 
						'action' => '' ), 
				array (
						'_dex_row_menu_id' => 5, 
						'name' => 'End Day', 
						'description' => 'End Day Operations', 
						'controller' => '', 
						'action' => '' ) );
				
		if (is_null ( $menu )) {// no se pudo cargar el menu
			return 'Error';
		}
		
		$this->setAttributeByRef ( 'menu', $menu );
		
		return 'Success';
	}
}
