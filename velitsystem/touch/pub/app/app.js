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

    launch: function() {
    	
    	this.started = true;
    	
    	this.init();
    },
    
    init : function () {
    	// show main panel
    	 this.views.viewport = new this.views.Viewport();
    	
    	
    	// is atutenticated 
    	
    	
    },
    // este evento es llamado una vez es cargado el Viewport
    // cambiar, primero cargar configuracion luego cargar viewport
    loadSetup: function () {
    	console.debug();
    }
});