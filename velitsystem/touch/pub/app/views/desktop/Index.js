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
            id: 'DesktopIndex',
            html: 'bienvenido a touch.velitsystem.com',
            dockedItems: [{
            	xtype: 'toolbar',
            	title: 'titulo del panel "desktopindex"',
            	items: [{
            		text: 'Logout',
            		handler: function (evt) {
            			Ext.dispatch({
            				controller: 'Auth',
            	            action    : 'logOut'
            			});
            		}
            	}]
            }]
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('App.views.DesktopIndex', App.views.DesktopIndex);