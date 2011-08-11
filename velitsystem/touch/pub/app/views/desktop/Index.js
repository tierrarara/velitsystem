/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage View
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

App.views.DesktopIndex = Ext.extend(Ext.Panel, {

    initComponent: function() {
    	
        var store =  new Ext.data.Store({
            model: 'DesktopMenu',
           
            autoLoad: true
        });
    	
    	Ext.apply(this, {

    		id: 'DesktopIndex',
    		layout: 'fit',

    		
    		items: [{
    			id: 'DesktopIndex-item-menu',
    			xtype: 'list',
                itemTpl: '{name} - <small>{description}</small>',
                grouped: false,
                store: store,
                onItemDisclosure: true,

                listeners: {
                    disclose: function(item, node, index, eventObj) {
                    	console.debug('disclose');
                    }
                }
    		}]
    	});
    	App.views.DesktopIndex.superclass.initComponent.call(this);
    }
});

Ext.reg('App.views.DesktopIndex', App.views.DesktopIndex);