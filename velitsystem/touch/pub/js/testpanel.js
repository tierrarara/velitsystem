

var list = new Ext.Application({
	name: 'list',
	
	launch: function () {  
	/////////////////////////////////////
	
	Ext.regModel('Customer', {
		idProperty: '_dex_row_customer_id',
		fields : [ {
			name : '_dex_row_customer_id',
			type : 'int'
		}, {
			name : 'name',
			type : 'string'
		}, 'address1' ],

		// TODO: Colocar el resto de Campos que se van a usar para este modelo.
		proxy : {
			type : 'ajax',
			// esto es lo que va a salir en la URL, sin embargo no importa si el
			// metodo que se ejecuta se llama
			// diferente.
			url : 'Customer/List',
			reader : {
				type : 'json',
				root : 'data'
			}
		}

	});
	
	var Store = new Ext.data.Store({
		model:'Customer',
		data:[{
			_dex_row_customer_id:1, name:'Rafaelito', address1:'Al lado de Mcdonalds'
		},
		{
			_dex_row_customer_id:2, name:'Johand', address1:'Al lado de Wendys'
		}]
		
	});
	
	var Template = new Ext.XTemplate(
		'<tpl for=".">',
			'<div class="thumb-wrap">{name} - {address1}</div>',
		'</tpl>'
		
		
	);
	
	new Ext.Panel({
		fullscreen:true,
		layout:'card',
		
		items:[{
			xtype:'list',
			store: Store,
			
			grouped: false,
			itemTpl:'<div class="thumb-wrap">{name} - <small>{address1}</small></div>',
			onItemDisclosure: true,
		}],
		
		
		
		dockedItems: [{
			xtype:'toolbar',
			dock:'top',
			items:[{
				xtype:'button',
				text:'Search By Name',
				//TODO: Hasta que no se haga la funcion que realizara este boton se deja en Empty
				handler:Ext.emptyFn
			}]
				
		},
		{
			xtype:'toolbar',
			dock:'bottom',
			items:[{
				xtype:'button',
				text:'Monday',
				//TODO: Hasta que no se haga la funcion que realizara este boton se deja en Empty
				handler:Ext.emptyFn
			},
			{
				xtype:'button',
				text:'Tuesday',
				//TODO: Hasta que no se haga la funcion que realizara este boton se deja en Empty
				handler:Ext.emptyFn
			},
			{
				xtype:'button',
				text:'Wednsday',
				//TODO: Hasta que no se haga la funcion que realizara este boton se deja en Empty
				handler:Ext.emptyFn
			},
			{
				xtype:'button',
				text:'Thursday',
				//TODO: Hasta que no se haga la funcion que realizara este boton se deja en Empty
				handler:Ext.emptyFn
			}]
		}]
	});
//////////////////////////////////////////////	
}});