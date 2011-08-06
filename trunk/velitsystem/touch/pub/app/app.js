/**
 * @category  Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage 
 * @copyright  Velit System
 * @license  
 * @version $Id$
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
    	 this.vp = new this.views.Viewport(); // asegurando solo un Viewport

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
    rq: function (url) {
    	// cargando Config object
    	url = url.replace(/^(\/)/, '');
    	
    	
    	// TODO: definir un objeto ajax global
    	var _rq = new Ext.data.Connection({
    	    listeners: {
    	    	beforerequest: {
    	            fn: function(con, opt){
    	            	App.vp.setLoading(true);
    	            },
    	            scope: this
    	        },
    	        requestcomplete: {
    	            fn: function(con, res, opt){
    	            	App.vp.setLoading(false);
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
    			console.debug(p1);
    			console.debug(p2);
    			console.debug(p3);
    		},
    		
    		callback: function (opts,success,request) {
    			
    			if (!success) {
    				Ext.Msg.confirm('Warning', '¿Intentar Nuevamente?', function (btn,value,opt) {
    					if (btn == 'yes') App.rq(opts.url);
    				});
    				
    				return;
    			}
    			
    			// all resquest return json
    			var response = Ext.decode(r.responseText);
    			
    			// aqui esta cual es la vista a mostrar
    			console.debug(response);
    			
    			
    		}
    	});
    	
    }
    
    
    
    
});