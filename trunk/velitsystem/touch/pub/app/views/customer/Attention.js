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
			model:'Customer'
		});
		
		Ext.apply(this, {
			id: 'CustomerAttention',
			layout: 'fit',
			
			// lista de clientens
			items:[{
				xtype:'list',
				store: Store,
				
				grouped: false,
				itemTpl:'<div class="thumb-wrap">{name} - <small>{address1}</small></div>',
				onItemDisclosure: true
			}],
			
			// botones
			dockedItems: [{
				xtype:'toolbar',
				dock:'top',
				items:[{
					xtype:'button',
					text:'Search By Name',
					// TODO: Hasta que no se haga la funcion que realizara este
					// boton se deja en Empty
					handler:Ext.emptyFn
				}]
					
			},
			{
				xtype:'toolbar',
				dock:'bottom',
				items:[{
					xtype: 'segmentedbutton',
					items:[{
						xtype:'button',
						text:'Monday',
						pressed: 1 == date.getDay(),
						keyDay:1,
						handler:this.onSelectDay
					},
					{
						xtype:'button',
						text:'Tuesday',
						pressed: 2 == date.getDay(),
						keyDay:2,
						handler:this.onSelectDay
					},
					{
						xtype:'button',
						text:'Wednsday',
						pressed: 3 == date.getDay(),
						keyDay:3,
						handler:this.onSelectDay
					},
					{
						xtype:'button',
						text:'Thursday',
						pressed: 4 == date.getDay(),
						keyDay:4,
						handler:this.onSelectDay
					},
					{
						xtype:'button',
						text:'Friday',
						pressed: 5 == date.getDay(),
						keyDay:5,
						handler:this.onSelectDay
					},
					{
						xtype:'button',
						text:'Saturday',
						pressed: 6 == date.getDay(),
						keyDay:6,
						handler:this.onSelectDay
					},
					{
						xtype:'button',
						text:'Sunday',
						pressed: 0 == date.getDay(),
						keyDay:0,
						handler:this.onSelectDay
					}]
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
				render: function () {
					console.debug('render');
				}
			}
		});
	
		App.views.CustomerAttention.superclass.initComponent.call(this);
	},

	onSelectDay: function(event){
		
		Ext.dispatch({
			controller:'Customer',
			action:'SelectDay',
			day:event.keyDay,
			historyUrl: 'Customer/SelectDay/'+event.keyDay
		});
	},
	
	

});

Ext.reg('App.views.CustomerAttention', App.views.CustomerAttention );