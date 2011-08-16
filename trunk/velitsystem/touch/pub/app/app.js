/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence 
 * @version    $Id$
 */

App = new Ext.Application({
	
    name: "App",
    started: false,
    config: null,
    baseUrl: '/', // TODO: cargar desde la configuracion inicial
    user: {},

    launch: function() {
    	
    	this.started = true;
    	
    	this.init();
    },
    
    init : function () {
    	try{ 
	    	// show main panel - Main Container
			this.vp = new App.views.Viewport(); // asegurando solo un Viewport
			
			// TODO: load config
			// si carga un hash del url no deberia ejecutar esta sentencia
			Ext.dispatch({
				controller: 'Desktop',
				action    : 'Index',
				historyUrl: 'Desktop/Index'
			}); // dispatch default screen
			
    	}catch (e) {
    		
    		App.handleError(e);
    		
		}
 
    },
    // este evento es llamado una vez es cargado el Viewport
    // cambiar, primero cargar configuracion luego cargar viewport
    loadSetup: function () {
    	console.debug('app.loadsetup');
    },
    
    
    /**
     * Muestra en el viewport la vista v pero antes carga
     * la configuracion de esa v, si el usuario puede verla o no
     * 
     * - aqui se pueden guardar las vistas cargas en cache hasta un maximo de n, 
     * se van eliminando las más antiguas para controlas la cantidad de js 
     * cargado en el cliente
     * 
     * - aqui es donde se van llamando al sistema los objetos que se van a crear
     * segun el controlador llamado
     * 
     * 
     */
    rq: function (url, method) {
    	// cargando Config object
    	url = url.replace(/^(\/)/, '');
    	
    	if (!method) method = 'GET'; 
    	
    	// @var Ext.data.Connection
    	var _rq = new Ext.data.Connection({
    	    listeners: {
    	    	beforerequest: {
    	            fn: function(con, opt){
    	            	App.vp.setLoading(true);
    	            	console.debug('beforerequest  - URL: "' + opt.url+ '"');
    	            },
    	            scope: this
    	        },
    	        requestcomplete: {
    	            fn: function(con, res, opt){
    	            	App.vp.setLoading(false);
    	            	console.debug('requestcomplete  - URL: "' + opt.url+ '"');
    	            },
    	            scope: this
    	        },
    	        requestexception: {
    	            fn: function(con, res, opt){
    	            	App.vp.setLoading(false);
    	            	console.debug('requestexception - URL: "' + opt.url+ '"');
    	            },
    	            scope: this
    	        }
    	    }
    	});
    	
    	
    	// TODO: definir los eventos para capturar : timeout, apache error (404,etc)
    	_rq.request({
    		url: this.baseUrl + url,
    		method: 'GET',

    		success: function (request,opts) {

    			console.debug('ajax - success');
   
    		},
    		
    		failure: function (request,opts) {
    			console.debug('ajax - failure');
    		},
    		
    		callback: function (opts,success,request) {
    			console.debug('ajax - callback ');
    			
    			if (!success) {// cambiar estas sentencias, el servidor puede 
    				// devolver status: 200 y success : false
    				Ext.Msg.confirm('Warning', 'Try Again?', function (btn,value,opt) {
    					if (btn == 'yes') App.rq(opts.url);
    				});
    				
    				return;
    			}
    			
    			try { 
    				// 	all resquest return json
    				var response = Ext.decode(request.responseText);
    				
    				// mover esta logica a un controlador
    				
    				if (Ext.isBoolean(response.success)) {
	    				if (response.dispatch && response.dispatch.controller) {
	    					// pasar la data al controlador
	    					response.dispatch.data = response;
	    					
	    					Ext.dispatch(response.dispatch);
		   					
		   				}else if (response.view && response.view.length > 0) {
	    					
		   					App.addView({
		   						viewName: response.view 
		   					});
		   					

	    				}else {
	    					throw "Dispatch or View is not define";
	    				}
    				
    				}else {
    					// si no viene response.success o tiene un valor no booleano
    					throw response.message;
    				}

    			} catch (ex) {
    				
    				App.handleError(ex);
    			}
    			
    		}
    	});
    	
    },
    
    /**
     * Funciona generica para notificar al usuario que ha ocurrido un error
     * de una forma "amigable"
     */
    handleError: function (ex) {console.debug(ex);
    	// TODO: definnir parametros para manejar diferentes tipos de problemas
    	Ext.dispatch({
            controller: 'Error',
            action    : 'handle',
            exception : ex 
        }); // dispatch default screen
    },
    
    addView: function (params) {

    	// TODO: registrar las vistas que se van cargando para ir limpiando el cache
    	
    	params.show = Ext.isBoolean(params.show) ? params.show : true;
    	
    	var v = App.vp.items.get(params.viewName)
		
		if (!v) {
			// creo la vista si no existe
			v = new App.views[params.viewName]();
			
			App.vp.add(v);
		}
    	
    	if (params.show) {
    		App.vp.setActiveItem(v);
    	}
    	
    	return v;
    	// var direction = (target === 'usersList') ? 'right' : 'left';
    	// this.setActiveItem(App.views[target], { type: 'slide', direction: direction }
    	
    },
    
    /**
     * Se ejecuta cuando termina la solicitud si success = true
     * luego es llamado el callback
     * @param request
     * @param opts
     */
    globalSuccessRqHandler: function (request,opts) {
    	// TODO: definir funcion
    },
    
    /**
     * Se ejecuta cuando termina la solicitud si success = false
     * O si responseStatus != 200
     * luego es llamado el callback
     * @param request
     * @param opts
     */
    globalFailureRqHandler: function (request,opts) {
    	// TODO: definir funcion
    },
    
    /**
     * esta funcion se ejecuta despues de success o despues de failure,
     * siempre se ejecuta
     * @param opts
     * @param success
     * @param request
     */
    globalCallbackRqHandler: function (opts,success,request) {
    	// TODO: definir funcion
    },
    
    /**
     * luego del callback estandar para la solicitud de la funcion form.submit
     * esta funcion ejecuta cuando termina la solicitud si success = true
     * @param request
     * @param opts
     */
    globalSuccessSubmitHandler: function (form, result, responseText) {
    	// TODO: definir funcion
    },
    
    /**
     * luego del callback estandar para la solicitud de la funcion form.submit
     * Se ejecuta cuando termina la solicitud si success = false
     * @param request
     * @param opts
     */
    globalFailureSubmitqHandler: function (form, result, responseText) {
    	// TODO: definir funcion
    },
    
});


Ext.Router.draw(function(map) { console.debug('Ext.Router.draw');
    map.connect(':controller/:action');
});