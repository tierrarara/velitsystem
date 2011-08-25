/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage Stores
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id$
 */

App.stores.Product = new App.data.Store({
	id: 'ProductStore',
	model : 'Product',
	clearOnPageLoad : true,
	remoteFilter : true,
	autoLoad : false
});