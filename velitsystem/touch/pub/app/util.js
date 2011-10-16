/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage Util
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

Ext.ns('App.util', 'App.data');

// manejo de los eventos asyncronos
// no utilizado
App.util.Proxy = {
	callback: function (records, operation, success) {
		try {
			var response = Ext.decode(operation.response.responseText);
			
			if (response.dispatch && response.dispatch.controller) {
				// pasar la data al controlador
				response.dispatch.data = response;
				
				Ext.dispatch(response.dispatch);
					
			}
			
		}catch (ex) {
			App.handleError(ex);
		}
	},
	
	success: function (request,opts) {
		console.debug(arguments);
	},
	
	failure: function (request,opts) {
		Ext.Msg.alert('Request Failure', 'Error en la solicitud');
		
		console.debug(request);
		
	}
};

// Clase base para los store, sobreescribiendo la funcion load
// para manejar la respuesta
App.data.Store = Ext.extend(Ext.data.Store, {
	
	load: function (options) {
		
		options = options || {};
		
		if (Ext.isFunction(options.callback)) {
			this._tsuccess = options.callback;
		}
		
		Ext.apply(options, {
			callback: function (records, operation, success) {
				try {
					var response = Ext.decode(operation.response.responseText);
					
					if (response.dispatch && response.dispatch.controller) {
						// pasar la data al controlador
						response.dispatch.data = response;
						
						Ext.dispatch(response.dispatch);
							
					}
					
					if (this._tsuccess) { 
						this._tsuccess(records, operation, success);
					
						delete(this._tsuccess);
					}
					
				}catch (ex) {
					App.handleError(ex);
				}
			}
		});
		
		App.data.Store.superclass.load.call(this, options);
	}
});
