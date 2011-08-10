/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage Controller
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

Ext.regController('Error', {
	
	handle: function (params) {

		if(params.exception) {
			Ext.Msg.alert('Unexpected Behavior', params.exception, Ext.emptyFn);
			
			console.debug(params.exception);
			
		}else {
			Ext.Msg.alert('Unexpected Behavior', 'Intente Iniciar la aplicación nuevamente', Ext.emptyFn);
		}
	},
	
	exception: Ext.emptyFn,
	
	userError: Ext.emptyFn
	
});