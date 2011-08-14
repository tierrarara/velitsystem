/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage Controller
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id: Desktop.js 48 2011-08-06 01:29:10Z johand22@gmail.com $
 */

Ext.regController('Desktop', {
	// show view DesktopIndex or defined in Params
	Index: function (params) {
		
		
		// como este es el primer controlador
		App.rq('Desktop/Index');
		
		/*var viewName = 'DesktopIndex', v;

		if (params.view){
			viewName = params.view; 
		}
		
		App.addView(viewName, true);*/

	}
	
});