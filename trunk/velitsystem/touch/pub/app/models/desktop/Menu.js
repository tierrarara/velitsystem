/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage Model
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id$
 */

Ext.regModel('DesktopMenu', {
	fields : [ {
		name : '_dex_row_menu_id',
		type : 'int'
	}, 'name', 'description', 'controller', 'action' ],
	proxy: {
		type: 'ajax',
		url : App.baseUrl + 'Desktop/Menu',
		reader: {
			type: 'json',
			root: 'data'
		}
	}
});