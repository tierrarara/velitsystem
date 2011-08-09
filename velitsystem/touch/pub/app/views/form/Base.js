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
		App.views.FormBase.superclass.initComponent.call(this);
	},
	 
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

//Ext.reg('App.views.FormBase', App.views.FormBase);