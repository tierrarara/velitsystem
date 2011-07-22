/**
 * 
 */


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
							 Ext.getCmp('content').update('Nuevo Contenido')
						 }
						 
					 }]
				}]
			}]
			
		});
	}
});