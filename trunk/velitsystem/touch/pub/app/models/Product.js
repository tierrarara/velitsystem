/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage Model
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id$
 */

App.models.Product = Ext.regModel('Product', {
	idProperty : '_dex_row_product_id',
	fields : [ {
		name : '_dex_row_product_id',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	} ],

	// TODO: Colocar el resto de Campos que se van a usar para este modelo.
	proxy : {
		type : 'ajax',
		url : App.baseUrl + 'Product/List',
		reader : {
			type : 'json',
			root : 'data'
		}
	}

});