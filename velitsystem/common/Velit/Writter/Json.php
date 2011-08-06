<?php
/**
 * 
 * Escribe la respuesta de la solicitud en formato Json
 * 
 * @category   Velit
 * @package    Velit_Response
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

class Velit_Writter_Json extends Velit_Writter {
	
	public function __toString() {

		return Zend_Json_Encoder::encode(get_object_vars($this));
		
	}

}