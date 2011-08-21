/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage View
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */


App.views.CustomerList = Ext.extend(Ext.Panel, {
	
	initComponent: function(){
		
		Ext.apply(this, {
			id: 'CustomerList',
			layout: 'fit',
			
			// lista de clientens
			items:[{
				id: 'Customer-List',
				xtype:'list',
				store: App.stores.Customer,
				
				grouped: false,
				itemTpl:'<div class="thumb-wrap">{name} - <small>{address1}</small></div>',
				//onItemDisclosure: true,
				
				listeners: {
					itemtap: function ( list, index, item, e ) {
						var r = list.getStore().getAt(index);

						Ext.dispatch({
							controller: 'Customer',
							action: 'Attention',
							record: r,
							historyUrl: 'Customer/Attention/' +r.getId()
						});
					}
				}
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
						pressed: 1 == this.day,
						keyDay:1
					},
					{
						xtype:'button',
						text:'Tu',
						pressed: 2 == this.day,
						keyDay:2
					},
					{
						xtype:'button',
						text:'We',
						pressed: 3 == this.day,
						keyDay:3
					},
					{
						xtype:'button',
						text:'Th',
						pressed: 4 == this.day,
						keyDay:4
					},
					{
						xtype:'button',
						text:'Fr',
						pressed: 5 == this.day,
						keyDay:5
					},
					{
						xtype:'button',
						text:'Sa',
						pressed: 6 == this.day,
						keyDay:6
					},
					{
						xtype:'button',
						text:'Su',
						pressed: 0 == this.day,
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
	
		App.views.CustomerList.superclass.initComponent.call(this);
	},

	onSelectDay: function(keyDay){
		
		Ext.dispatch({
			controller:'Customer',
			action:'List',
			day: keyDay,
			store: Ext.getCmp('Customer-List').getStore(),
			historyUrl: 'Customer/List/'+keyDay
		});
	}
	
	

});

Ext.reg('App.views.CustomerList', App.views.CustomerList );