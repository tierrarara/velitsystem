/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage Controller
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id: Auth.js 48 2011-08-06 01:29:10Z johand22@gmail.com $
 */

Ext.regController('Desktop', {
	
	Index: function () {
		
		App.rq('/Desktop/Index');
		
		
	}
	
});