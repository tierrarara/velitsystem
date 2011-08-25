/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage View
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id$
 */

App.views.ProductOrder = Ext.extend(Ext.Panel, {
	id:'ProductOrder',
	title: 'Product Orders',
	
	initComponent: function () {
		var config = {
				dockedItems: [{
					xtype: 'toolbar',
					ui: 'light',
					dock: 'top',
					items: [{// boton para agregar una nueva orden
						iconCls: 'add',
						handler: {
							fn: this.onAddOrder,
							scope: this
						}
					}]
				}],
				
				items: [{
					xtype: 'list'
				}]
		};
		
		Ext.apply(this, config);
		
		App.views.CustomerList.superclass.initComponent.call(this);
	},
	
	onAddOrder: function () {
		console.log('add order');
	}
});

Ext.reg('App.views.ProductOrder', App.views.ProductOrder);