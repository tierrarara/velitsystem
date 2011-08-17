/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage View
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id: Index.js 107 2011-08-11 22:18:30Z tierrarara@gmail.com $
 */


App.views.CustomerAttention = Ext.extend(Ext.Panel, {
	
	initComponent: function(){

		// TODO: deberia existir un objeto global Date
		var date = new Date();
			
		// Objeto para cargar la data definida en la vista de Customer
		var Store = new Ext.data.Store({
			model:'Customer',
			clearOnPageLoad: true,
			remoteFilter: true,
			autoLoad: true,
			filters: [{
				property: 'day',
				value   : date.getDay()
			}]
		});
		
		Ext.apply(this, {
			id: 'CustomerAttention',
			layout: 'fit',
			
			// lista de clientens
			items:[{
				id: 'Customer-List',
				xtype:'list',
				store: Store,
				
				grouped: false,
				itemTpl:'<div class="thumb-wrap">{name} - <small>{address1}</small></div>',
				onItemDisclosure: true
			}],
			
			// botones
			dockedItems: [{
				xtype:'toolbar',
				dock:'bottom',
				items:[{
					id: 'day-option-route',
					xtype: 'segmentedbutton',
					items:[{
						xtype:'button',
						text:'Mo',
						pressed: 1 == date.getDay(),
						keyDay:1
					},
					{
						xtype:'button',
						text:'Tu',
						pressed: 2 == date.getDay(),
						keyDay:2
					},
					{
						xtype:'button',
						text:'We',
						pressed: 3 == date.getDay(),
						keyDay:3
					},
					{
						xtype:'button',
						text:'Th',
						pressed: 4 == date.getDay(),
						keyDay:4
					},
					{
						xtype:'button',
						text:'Fr',
						pressed: 5 == date.getDay(),
						keyDay:5
					},
					{
						xtype:'button',
						text:'Sa',
						pressed: 6 == date.getDay(),
						keyDay:6
					},
					{
						xtype:'button',
						text:'Su',
						pressed: 0 == date.getDay(),
						keyDay:0
					}],
					listeners: {
						toggle: {
							fn: function (seg, btn, pressed) {
								if (pressed) {
									this.onSelectDay(btn.keyDay);
								}
							},
							scope: this
						}
					}
				},{
					xtype: 'searchfield',
					name: 'search',
					placeHolder: 'Customer Search By Name',
					listeners: {
						action: function () {
							console.debug('action');
						}
					}
				}]
			}],
			
			listeners: {
				show: function (panel) {

				}
				
			}
		});
	
		App.views.CustomerAttention.superclass.initComponent.call(this);
	},

	onSelectDay: function(keyDay){
		
		Ext.dispatch({
			controller:'Customer',
			action:'SelectDay',
			day: keyDay,
			store: Ext.getCmp('Customer-List').getStore(),
			historyUrl: 'Customer/SelectDay/'+keyDay
		});
	}
	
	

});

Ext.reg('App.views.CustomerAttention', App.views.CustomerAttention );