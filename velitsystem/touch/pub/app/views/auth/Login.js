/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage View
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

App.views.AuthLogin = Ext.extend(Ext.form.FormPanel, {
	
	constructor: function () {
		 App.views.AuthLogin.superclass.constructor.call(this);
	},

    initComponent: function() {
        Ext.apply(this, {
            id: 'authlogin',
        	title: 'Velit System User Autentication',
        	
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
            }],
        	
        	dockedItems: [{
        		dock: 'top',
        		xtype: 'toolbar',
        		title: 'Velit System User Autentication'
        	},{
        		dock: 'bottom',
        		xtype: 'toolbar',
        		items: [{
        			xtype: 'spacer'
        		},{
            		xtype: 'button',
            		text: 'Enter',
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
    },
    // TODO: no me funciona la herencia - investigar
    // estos metodos deberian estar en un solo lugar ( clase padre)
    showErrors: function(errors) {
        //var fieldset = this.down('#userFormFieldset');
    	
    	this.items.each(function (field){
    		
    		if (!field.isField) return;
    		
    		var fieldErrors = errors.getByField(field.name);
    		
    		if (fieldErrors.length > 0) {console.debug(field.name);
    		console.debug(this);
                var errorField = this.down('#'+field.name+'ErrorField');
                console.debug(errorField);
                console.debug('error field');
                field.addCls('invalid-field');
                errorField.update(fieldErrors);
                errorField.show();
            } else {
                this.resetField(field);
            }
    	},this);
 
        //fieldset.setInstructions("Please amend the flagged fields");
    },

    resetForm: function() {
        //var fieldset = this.down('#userFormFieldset');
    	this.items.each(function(field) {
    		if (!field.isField) return;
    		
            this.resetField(field);
            
        }, this);
        //fieldset.setInstructions(this.defaultInstructions);
        this.reset();
    },

    resetField: function(field) {
        var errorField = this.down('#'+field.name+'ErrorField');
        errorField.hide();
        field.removeCls('invalid-field');
        return errorField;
    }
});

Ext.reg('App.views.AuthLogin', App.views.AuthLogin);