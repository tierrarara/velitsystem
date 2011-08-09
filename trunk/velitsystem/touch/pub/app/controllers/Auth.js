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
		
		var v;
		
		if (!App.vp.items.get('AuthLogin')){
			console.debug('Agregando view');
			v = new App.views['AuthLogin']();
			App.vp.items.add(v);// la agrego al vp
		}else {
			console.debug('ya existe el view');
		}
		
		// activo la patanlla para que se ves
		App.vp.setActiveItem('AuthLogin');
	},
	
	logIn: function (params) {
		
		var user = Ext.ModelMgr.create(params.data, 'AuthUser');

		var errors = user.validate();

		params.form.resetFormErrors();
		
        if (!errors.isValid()) {
			
        	params.form.showErrors(errors);
			
        	return;
        	
		}
	
		
		
		params.form.submit({
			
			method: 'POST',
			
			waitTitle : 'Autenticando',

			waitMsg : 'validando datos de usuario...',
			
			success : function(form, result) {
				Ext.dispatch({
		            controller: 'Desktop',
		            action    : 'index'
		        });
				
			},
			failure : function (form, result) {
				// TODO: definir tipo de error
				Ext.dispatch({
		            controller: 'Error',
		            action    : 'handle'
		        });
			}
		});
	},
	
	logOut: function (params) {
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