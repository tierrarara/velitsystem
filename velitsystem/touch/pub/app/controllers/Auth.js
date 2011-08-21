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
		
		if (!App.vp.items.get('AuthLogin')){
			console.debug('Agregando view AuthLogin');
			var v = new App.views['AuthLogin']();
			App.vp.items.add(v);// la agrego al vp
		}

		// activo la patanlla para que se ves
		App.vp.setActiveItem('AuthLogin');
	},
	
	logIn: function (params) {
		
		var user = Ext.ModelMgr.create(params.data, 'AuthUser');

		var errors = user.validate();

		params.form.resetFormErrors();
		
		 Ext.getCmp('login-fieldset').setInstructions(params.form.defaultInstructions);
		
        if (!errors.isValid()) {
			
        	params.form.showErrors(errors);
			
        	return;
        	
		}
		
		params.form.submit({
			
			method: 'post',
			
			waitTitle : 'Autenticando',

			waitMsg : 'validando datos de usuario...',
			// si success = true
			success : function(form, result, responseText) {

				var response = Ext.decode(responseText);

				Ext.dispatch(response.dispatch);
				
				// activar el boton logout
				Ext.getCmp('btn-logout').show('fade');
				
			},
			// si success = false
			failure : function (form, result, responseText) {
				var response = Ext.decode(responseText);
				
				Ext.getCmp('login-fieldset').setInstructions('<span style="color: red;">'+response.message+'</span>');

				
			},
			scope: params.form
		});
	},
	
	logOut: function (params) {
		// TODO: colocar una funcion success a App.rq como parametro
		// para marcar como no autenticado cuando no se pueda hacer el request
		//App.user.isAuthenticate = false;
		
		Ext.getCmp('btn-logout').hide('fade');
		
		App.rq('/logout');
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