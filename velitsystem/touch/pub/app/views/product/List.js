/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage View
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id$
 */

App.views.CustomerList = Ext.extend(Ext.Panel, {
	id:'ProductList',
	title: 'Product List',
	day: 0,
	
	initComponent: function () {
		var config = {
			
			
			items: [{
				xtype: 'list',
				listeners: {
					itemtap: {
						fn: this.onItemtap,
						scope: this
					}
				}
			}]
		};
		
		Ext.apply(this, config);
		
		App.views.CustomerList.superclass.initComponent.call(this);
	},
	
	onItemtap: function () {
		console.log('ProductList onItemtap');
	}
	
});

Ext.reg('App.views.ProductList', App.views.ProductList);