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
        Ext.apply(this, {
            id: 'desktopindex',
            html: 'bienvenido a velit touch',
            dockedItem: [{
            	xtype: 'toolbar',
            	title: 'titulo del panel "desktopindex"',
            	items: [{
            		text: 'logout',
            		handler: Ext.emptyFn
            	}]
            }]
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('App.views.DesktopIndex', App.views.DesktopIndex);