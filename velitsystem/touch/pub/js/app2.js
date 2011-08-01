/**
 * $Id$
 */

Ext.setup({
	
	glossOnIcon: false,
	
	onReady: function (){
		
		new Ext.Messa.alert(
				'titulo',
				'Mensaje',
				function () { console.debug('click en el boton');}
		);
		
	}
});