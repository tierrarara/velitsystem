/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage Model
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id$
 */

App.models.ProductOrder = Ext.regModel('ProductOrder', {
	idProperty : '_dex_row_xxx',
	fields : [ {
		name : '_dex_row_xxx',
		type : 'int'
	} ],

	// TODO: Colocar el resto de Campos que se van a usar para este modelo.
	proxy : {
		type : 'ajax',
		url : App.baseUrl + '',
		reader : {
			type : 'json',
			root : 'data'
		}
	}

});