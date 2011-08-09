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

    launch: function() {
    	
    	this.started = true;
    	
    	this.init();
    },
    
    init : function () {
    	// show main panel - Main Container
    	 this.vp = new App.views.Viewport(); // asegurando solo un Viewport

    	 // TODO: load config

    	 Ext.dispatch({
             controller: 'Desktop',
             action    : 'index'
         }); // dispatch default screen
 
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
    	
    	// TODO: definir un objeto ajax global
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
    		
    		failure: function (p1,p2,p3) {
    			console.debug('ajax - failure');
    		},
    		
    		callback: function (opts,success,request) {
    			console.debug('ajax - callback ');
    			
    			if (!success) {
    				Ext.Msg.confirm('Warning', 'Try Again?', function (btn,value,opt) {
    					if (btn == 'yes') App.rq(opts.url);
    				});
    				
    				return;
    			}
    			
    			try { 
    				// 	all resquest return json
    				var response = Ext.decode(request.responseText);
    				
    				// mover esta logica a un controlador
    				
    				if (response.success) {console.debug('success: true');
	    				if (response.dispatch && response.dispatch.controller) {
		   					 Ext.dispatch({
		   				            controller: response.dispatch.controller,
		   				            action: response.dispatch.action
		   				    });
		   					
		   				}else if (response.view && response.view.length > 0) {
	    					console.debug('response.view: '+ response.view);
		   					var v;

		   					if (!App.vp.items.get(response.view)){
		   						console.debug('Agregando view');
		   						v = new App.views[response.view]();
		   						App.vp.items.add(v);
		   					}else {
		   						console.debug('ya existe el view');
		   					}
		   					
		   					// TODO: agregar data a la vista, tambien se pueden
		   					// definir eventos en la vista que van cargando la data

	    					App.vp.setActiveItem(response.view);
	//    					var direction = (target === 'usersList') ? 'right' : 'left';
	//    			        this.setActiveItem(
	//    			            App.views[target],
	//    			            { type: 'slide', direction: direction }
	//    			        );	
	    				}else {
	    					throw "Dispatch or View is not define";
	    				}
    				
    				}else {console.debug('success: false');
    					
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
    }
    
    
    
    
});


Ext.Router.draw(function(map) {
    map.connect(':controller/:action');
});