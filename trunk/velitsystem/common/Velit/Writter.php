<?php
/**
 * 
 * Clase estandard para escribir la respuesta de una solicitud
 * -Aqui se definen las variables comunes de cada respuesta
 * -Como es una clase estandar se le pueden agregar mas variables onDemand
 * según requerimientos del controlador js que maneja la respuesta
 * 
 * @category   Velit
 * @package    Velit_Response
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

class Velit_Writter {
	
	/**
	 * 
	 * Indica si la solicitud se ejecuto satisfactoriamente
	 * @var bool
	 */
	public $success = true;
	
	/**
	 * 
	 * Nombre de la vista a mostrar
	 * @var string
	 */
	public $view = 'desktopDasboard';
	
	/**
	 * 
	 * Desde donde se realizó la solicitud
	 * - normalmente es algo como $_SERVER[QUERY_STRING]
	 * 
	 * @var string
	 */
	public $referer = '';
	
	/**
	 * 
	 * Arreglo de datos cargados de la BD
	 * @var array de objetos
	 */
	public $data = array();
	
	/**
	 * 
	 * Mensaje general
	 * @var string
	 */
	public $message = '';
	
	/**
	 * 
	 * Lista de errores si existen
	 * @var array
	 */
	public $errors = array();

	// TODO: tal vez sea una buena opcion colocar aquí las etiquetas traducidas
	
	/**
	 * 
	 * Devuelve el arreglo de datos
	 */
	public function __toString() {
		
		return print_r(get_object_vars($this),true);
	
	}

}
