/**
 * $Id$
 */

console.debug('read file app2.js');

Ext.setup({
	
	glossOnIcon: false,
	
	onReady: function (){
		console.debug('on ready app2');
		Ext.Msg.alert(
				'titulo',
				'Mensaje',
				function () { console.debug('click en el boton');}
		);
		
		//Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);

		
	}
});