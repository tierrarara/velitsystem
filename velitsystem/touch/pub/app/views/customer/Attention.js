/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage View
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id$
 */


App.views.CustomerAttention = Ext.extend(Ext.Panel, {
	
	layout: 'fit',
	
	initComponent: function(){

	// Objeto para cargar la data definida en la vista de Customer
	var Store = new Ext.data.Store({
		model:'Customer'
	});
	
	Ext.apply(this, {
		fullscreen:true,
		layout:'card',
		
		items:[{
			xtype:'list',
			store: Store,
			
			grouped: false,
			itemTpl:'<div class="thumb-wrap">{name} - <small>{address1}</small></div>',
			onItemDisclosure: true
		}],
		
		
		
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
				xtype:'button',
				text:'Monday',
				keyDay:0,
				// TODO: Hasta que no se haga la funcion que realizara este
				// boton se deja en Empty
				handler:this.onSelectDay
			},
			{
				xtype:'button',
				text:'Tuesday',
				keyDay:1,
				// TODO: Hasta que no se haga la funcion que realizara este
				// boton se deja en Empty
				handler:this.onSelectDay
			},
			{
				xtype:'button',
				text:'Wednsday',
				keyDay:2,
				// TODO: Hasta que no se haga la funcion que realizara este
				// boton se deja en Empty
				handler:this.onSelectDay
			},
			{
				xtype:'button',
				text:'Thursday',
				keyDay:3,
				// TODO: Hasta que no se haga la funcion que realizara este
				// boton se deja en Empty
				handler:this.onSelectDay
			},
			{
				xtype:'button',
				text:'Friday',
				keyDay:4,
				// TODO: Hasta que no se haga la funcion que realizara este
				// boton se deja en Empty
				handler:this.onSelectDay
			},
			{
				xtype:'button',
				text:'Saturday',
				keyDay:5,
				// TODO: Hasta que no se haga la funcion que realizara este
				// boton se deja en Empty
				handler:this.onSelectDay
			},
			{
				xtype:'button',
				text:'Sunday',
				keyDay:6,
				// TODO: Hasta que no se haga la funcion que realizara este
				// boton se deja en Empty
				handler:this.onSelectDay
			}
			]
		}]
	}
	
	);
	
	
	
	
	App.views.CustomerAttention.superclass.initComponent.call(this);
},

	onSelectDay: function(event){
	
	
		Ext.dispatch({
			controller:'Customer',
			action:'selectDay',
			day:event.keyDay
		});
}

});