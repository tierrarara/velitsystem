/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage View
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id$
 */

App.views.CustomerDetail = Ext.extend(Ext.TabPanel, {

	title: 'Info',
	id: 'CustomerDetail',
	
	initComponent : function() {

		var config = {
				iconCls: 'info',
				tpl: '<div> Name: {name}</div><br /><div>Address {address1}</div>'
		};
		
		Ext.apply(this, config);
		
		App.views.Viewport.superclass.initComponent.call(this);
	}

});

Ext.reg('App.views.CustomerDetail', App.views.CustomerDetail);