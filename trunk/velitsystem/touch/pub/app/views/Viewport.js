/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage View
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    
    initComponent: function() {
    	
    	this.loginBtn = new Ext.Button({
    		id: 'btn-logout',
            hidden: true,
            text: 'logOut',
            handler: function (evt) {
            	Ext.dispatch({
            		controller: 'Auth',
            		action: 'logOut'
            	});
            }
        });
    	
    	
        Ext.apply(this, {
        	id: 'ViewPort',
        	// top bar global
        	dockedItems: [{
        		xtype: 'toolbar',
        		dock: 'top',
        		title:'Touch Velit System - vTouch',
        		items:[{
        			xtype: 'spacer'
        		},this.loginBtn]
        	}]
        	
        	
        });
        App.views.Viewport.superclass.initComponent.call(this);
    },
    
    /**
     * @param App.views.Viewport
     */
    onShow: function (vp) {
    	App.loadSetup();
    }
});