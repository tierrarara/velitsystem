/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage View
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

App.views.AuthLogin = Ext.extend(App.views.FormBase, {
	
    initComponent: function() {
        Ext.apply(this, {
            id: 'AuthLogin',
        	url: 'login',
        	defaultInstructions: 'Instructions Label Text',

        	items: [{
        		id: 'login-fieldset',
        		xtype: 'fieldset',
        		title: 'User Credentials',
        		instructions: 'Instructions Label Text',
        		items: [{
            		xtype: 'textfield',
            		name: 'username',
            		label: 'Username'
            	},{
                    xtype: 'App.views.ErrorField',
                    fieldname: 'username'
                },{
            		xtype: 'textfield',
            		inpuType: 'password',
            		name: 'password',
            		label: 'Password'
            	},{
                    xtype: 'App.views.ErrorField',
                    fieldname: 'password'
                }]
        	}],
        	
        	dockedItems: [{
        		dock: 'top',
        		xtype: 'toolbar',
        		title: 'User Autentication'
        	},{
        		dock: 'bottom',
        		xtype: 'toolbar',
        		items: [{
        			xtype: 'spacer'
        		},{
            		xtype: 'button',
            		text: 'Enter',
            		ui: 'action',
            		handler: function (e) {
            			 Ext.dispatch({
            	             controller: 'Auth',
            	             action    : 'logIn',
            	             data: this.getValues(),
            	             form: this
            	         });
            		},
            		scope: this
            	}]
        	}]
        	
        });
        App.views.AuthLogin.superclass.initComponent.call(this);
    }
});

Ext.reg('App.views.AuthLogin', App.views.AuthLogin);