/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage Controller
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id: Customer.js 48 2011-08-06 01:29:10Z johand22@gmail.com $
 */

Ext.regController('Customer', {
	List : function(params) {
		console.debug('Customer / List');
		App.addView({
			viewName: 'CustomerAttention'
		});
	},
	SelectDay : function(params) {
		console.debug(params);
		App.rq('Customer/List');
	}

});