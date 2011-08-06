/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package Controller
 * @subpackage Auth
 * @copyright  Velit System
 * @license  
 * @version $Id$
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
	
	logIn: function () {
		
	},
	
	logOut: function () {
		
	},
	
	showForm: function () {
		console.debug ('auth - show form');
		var f = new  Ext.form.FormPanel({
			
			title: 'Autenticacion',
			
			items: [
			        {
			            xtype: 'textfield',
			            name : 'username',
			            label: 'Username'
			        },
			        {
			            xtype: 'textfield',
			            inputType: 'password',
			            name : 'password',
			            label: 'Password'
			        }
			        
			        ]
			
			
		});
		
		App.views.viewport.items.add(f);
		App.views.viewport.doLayout();
	}
	
	
});