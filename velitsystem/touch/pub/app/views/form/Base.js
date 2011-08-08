/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage View
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */
App.views.FormBase = Ext.extend(Ext.form.FormPanel, {
	
	
	 initComponent: function() {
		 
		 Ext.apply({
			 showErrors: function(errors) {
			        //var fieldset = this.down('#userFormFieldset');
			        this.fields.each(function(field) {
			            var fieldErrors = errors.getByField(field.name);

			            if (fieldErrors.length > 0) {
			                var errorField = this.down('#'+field.name+'ErrorField');
			                field.addCls('invalid-field');
			                errorField.update(fieldErrors);
			                errorField.show();
			            } else {
			                this.resetField(field);
			            }
			        }, this);
			        //fieldset.setInstructions("Please amend the flagged fields");
			    },

			    resetForm: function() {
			        //var fieldset = this.down('#userFormFieldset');
			        this.fields.each(function(field) {
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

		 App.views.FormBase.superclass.initComponent.call(this);
	 }	
	 
	 
});

Ext.reg('App.views.FormBase', App.views.FormBase);