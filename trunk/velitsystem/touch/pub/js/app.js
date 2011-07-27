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
						 text: 'Nuevo contenido',
						 handler: function () {
							 // Ext.getCmp('content').update('Nuevo
								// Contenido');
							 
							 Ext.getCmp('content').setLoading(false);

							 Ext.Ajax.request({
								 url: '/test.json',
								 method: 'GET',
								 defaultHeaders: 'application/json',
								 callback: function (o,s,r) {
									 
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
						 
					 }]
				}]
			}]
			
		});
	}
});
