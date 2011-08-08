/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage Controller
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

Ext.regController('Auth', {

	authenticated: false,
	
	/**
	 * check if is autenticated the current user
	 * @return bool
	 */
	isAutenticated: function () {
		return this.authenticated;
	},
	
	form : function (params) {
		// creo la pantalla
		var v = new App.views.AuthLogin();
		// la agrego al vp
		App.vp.items.add(v);
		// activo la patanlla para que se ves
		App.vp.setActiveItem('authlogin');
	},
	
	logIn: function (params) {
		
		var user = Ext.ModelMgr.create(params.data, 'AuthUser');

		var errors = user.validate();

		//params.form.resetForm();
		
        if (!errors.isValid()) {
        	console.debug('INVALID');
			console.debug(errors);
			console.debug('<--- errors');
			params.form.showErrors(errors);
			return;
		}
		console.debug('frm.VALID');
//		params.form.submit({
//			
//			method: 'POST',
//			
//			waitTitle : 'Autenticando',
//
//			waitMsg : 'validando datos de usuario...',
//			
//			success : function(form, result) {
//				console.debug('frm.submit.success');
//				
//			},
//			failure : function (form, result	) {
//				console.debug('frm.submit.failure');
//			}
//		});
	},
	
	logOut: function () {
		
	}
//	,
//	
//	showForm: function () {
//		console.debug ('auth - show form');
//		var f = new  Ext.form.FormPanel({
//			
//			title: 'Autenticacion',
//			
//			items: [
//			        {
//			            xtype: 'textfield',
//			            name : 'username',
//			            label: 'Username'
//			        },
//			        {
//			            xtype: 'textfield',
//			            inputType: 'password',
//			            name : 'password',
//			            label: 'Password'
//			        }
//			        
//			        ]
//			
//			
//		});
//		
//		App.views.viewport.items.add(f);
//		App.views.viewport.doLayout();
//	}
	
	
});