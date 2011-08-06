/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package Controller
 * @subpackage Auth
 * @copyright  Velit System
 * @license  
 * @version $Id: Auth.js 48 2011-08-06 01:29:10Z johand22@gmail.com $
 */

Ext.regController('Desktop', {
	
	index: function () {
		
		App.rq('/Desktop/Index');
		
		
	}
	
});