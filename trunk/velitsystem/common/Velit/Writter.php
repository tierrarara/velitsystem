<?php
/**
 * 
 * Clase estandard para escribir la respuesta de una solicitud
 * -Aqui se definen las variables comunes de cada respuesta
 * -Como es una clase estandar se le pueden agregar mas variables onDemand
 * según requerimientos del controlador js que maneja la respuesta
 * 
 * @category   Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package    Velit_Response
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

abstract class Velit_Writter {
	
	/**
	 * 
	 * Indica si la solicitud se ejecuto satisfactoriamente
	 * 
	 * @var bool
	 */
	public $success = true;
	
	/**
	 * 
	 * Controlador a ejecutar en el mvc de sencha-touch
	 * 
	 * array(
	 * 	controller => controllerName, 
	 * 	action => actionName, param1 => 
	 * 	param1,...)
	 * 
	 * @var array
	 */
	public $dispatch = array();
	
	/**
	 * 
	 * Nombre de la vista a mostrar, una vista simple
	 * @var string
	 */
	public $view = '';
	
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
	 * Definir como se escribe el objeto
	 */
	abstract public function __toString();

}
