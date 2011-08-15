/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage Model
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id $
 */

App.models.Customer = Ext.regModel('Customer', {
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
		url : App.baseUrl + 'Customer/List',
		reader : {
			type : 'json',
			root : 'data'
		}
	}

});