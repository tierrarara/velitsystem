/**
 * $Id$
 */

console.debug('read file app2.js');

//Ext.setup({
//	
//	glossOnIcon: false,
//	
//	onReady: function (){
//		console.debug('on ready app2');
//		Ext.Msg.alert(
//				'titulo',
//				'Mensaje',
//				function () { console.debug('click en el boton');}
//		);
//		
//		//Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
//
//		
//	}
//});


A = Ext.extend(Ext.Panel, {
	
//	constructor: function (config) {
//		
//		console.debug('spClass en tt.A.constructor');
//		console.debug(this.superclass);
//		console.debug(A.superclass.superclass);
//		A.superclass.superclass.constructor.call(this, config);
//	},
	
	initComponent: function () {
		console.debug('spClass en tt.A.initComponent');
		//console.debug(this.superclass); no es igual
		console.debug(A.superclass); // este es el correcto
		
		A.superclass.initComponent.call(this);
	},
	
	Afn: function () {
		console.debug(this);
		console.debug('Afn');
	}
	
	
});

B = Ext.extend(A,{
	
//	constructor: function (config) {
//		
//		console.debug('spClass en tt.A.constructor');
//		console.debug(this.superclass);
//		console.debug(.superclass.superclass);
//		B.superclass.superclass.constructor.call(this, config);
//	},
	
	initComponent: function () {
		console.debug('spClass en B.initComponent');
		//console.debug(this.superclass); este no
		console.debug(B.superclass); // esta es la llamada correcta a superclass
		
		B.superclass.initComponent.call(this);
	},
	
	Bfn: function () {
		console.debug(this);
		console.debug('Afn');
	}
	
});


Ext.onReady(function () {
	var b = new B();
	
	b.Afn();
	
	console.debug(b);
});