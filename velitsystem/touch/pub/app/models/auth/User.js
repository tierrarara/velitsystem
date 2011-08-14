/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage Model
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id: User.js 54 2011-08-06 17:56:05Z tierrarara@gmail.com $
 */
App.models.AuthUser = Ext.regModel('AuthUser', {
	idProperty: '_dex_row_user_id',
	
    fields: [{
            name: 'username',
            type: 'string'
        }, {
            name: 'password',
            type: 'string'
        }
    ],
    
    validations: [{
    	type: 'presence',
    	name: 'username',
    	message: 'Write your Username'
    },{
    	type: 'presence',
    	name: 'password',
    	message: 'Write your password'
    }],
    
    proxy: {
    	url: App.baseUrl + 'login',
        type: 'ajax',// solo consultar usuario
        id: 'proxy-authuser'
    }
});