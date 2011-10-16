/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage Controller
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id: Customer.js 48 2011-08-06 01:29:10Z johand22@gmail.com $
 */

Ext.regController('Customer', {
	List : function(params) {
		// TODO: hacer un objeto global Date
		var day = params.day || new Date().getDay(); 
		
		var v = App.addView({
			viewName: 'CustomerList',
			config: {day: day}
		});

		App.stores.Customer.clearFilter();
		// load new data by day
		App.stores.Customer.filter('day', day);

		//App.stores.Customer.load();
		
	},
	/**
	 * @deprecated
	 * @param params
	 */
	SelectDay : function(params) {

		params.store.clearFilter();
		// load new data by day
		params.store.filter('day', params.day);
		
	},
	// atender cliente
	Attention: function (params) {
		
		var customerId = parseInt(params.customerId) || 0;
		
		var store = Ext.getStore('CustomerStore');
		
		var v = App.addView({
			viewName: 'CustomerAttention',
			active: true,
			config: { customer: customerId }
		});
		console.log('customer id' + customerId);
		// agrego a la vista de detalle el cliente seleccionado
		if (customerId) {
			// TODO: tal vez es preferible que algunas pantallas no pueden ser cargadas directamente
			// aunque es mejor para la experiencia del cliente que si se pueda
			if (store.getCount() < 1) { // si el store no ha sido cargado
				
				store._tsuccess = function (){

					Ext.getCmp('CustomerDetail').update( store.getById(customerId).data);
				};
				// autoload on filter
				store.clearFilter();
				// cargar el store con el cliente seleccionado
				store.filter('_dex_row_customer_id', customerId);

//				store.load({scope: store,callback: function () {
//					console.log('customer success');
//					var record = store.getById(customerId);
//					Ext.getCmp('CustomerDetail').update(record.data);
//					
//				}});
			}else {
				
				Ext.getCmp('CustomerDetail').update(store.getById(customerId).data);
			
			}
		}
		
	}

});