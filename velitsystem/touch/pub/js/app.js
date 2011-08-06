/**
 * 
 */
//
// Ext.util.JSONP.request({
// url: '/test.json',
// callbackKey: 'callback'
// });
// function callback ( opts) {
// Ext.getCmp('content').setLoading(false);
// console.debug(opts);
//									 
// var tpl = new Ext.XTemplate(
// '<tpl for="rows">', // rows -> json response
// '<p>{name}</p>',
// '<p>{phone}</p>',
// '</tpl></p>'
// );
// tpl.overwrite(Ext.getCmp('content').body, opts);
//									 
// }

var TouchVelit = new Ext.Application({
	name: 'Touch Velit',
	
	launch: function () {
		this.vp = new Ext.Panel({
			fullscreen: true,
			layout: 'fit',
			
			items: [{
				id: 'content',
				html: 'Content',
				dockedItems:[{
					 dock : 'top',
					 xtype: 'toolbar',
					 title: 'Top Toolbar',
				},{
					 dock : 'top',
					 xtype: 'toolbar',
					 items: [{
						 text: 'Ajax con Json',
						 handler: function () {
							
							 Ext.getCmp('content').setLoading(true);

							 Ext.Ajax.request({
								 url: 'test.json', // ver en routing.xml modulo y accion ejecutada
								 method: 'GET',
								 callback: function (o,s,r) {
									 
									 Ext.getCmp('content').setLoading(false);
									
									 if (!s) return; // hacer una funcion global para alerta de error 
									
									 var tpl = new Ext.XTemplate(
									    '<tpl for="rows">',     // rows -> json response root
									        '<p>{name} - <b>{phone}</b></p>',
									    '</tpl>'
									);
									tpl.overwrite(Ext.getCmp('content').body, Ext.decode(r.responseText));
								 }
							 });
							 
						 }
						 
					 },{
						 text: 'Ajax Con respuesta HTML',
						 handler: function () {
							 Ext.getCmp('content').setLoading(true);
							 
							 Ext.Ajax.request({
								 url: 'test', // ver en routing.xml modulo y accion ejecutada
								 method: 'GET',
								 callback: function (o,s,r) {
									 
									 Ext.getCmp('content').setLoading(false);
									 
									 if (!s) return; // hacer una funcion global para alerta de error
									 
									 Ext.getCmp('content').update(r.responseText);
									 
								 }
							 });
							 
						 }
						 
					 }]
				}]
			}]
			
		});
	}
});
