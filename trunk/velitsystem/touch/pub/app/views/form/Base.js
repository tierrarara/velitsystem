/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage View
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id: Base.js 107 2011-08-11 22:18:30Z tierrarara@gmail.com $
 */
App.views.FormBase = Ext.extend(Ext.form.FormPanel, {
	
	initComponent: function() {
		App.views.FormBase.superclass.initComponent.call(this);
	},
	
	/**
	 * 
	 * @param Ext.data.Errors
	 */
	showErrors: function(errors) {
		
		//this.resetFormErrors();
		
		errors.each(function(item,idx,length){
			this.getFields(item.field).addCls('invalid-field');

			var errorField = this.down('#'+item.field+'ErrorField');
			
			 errorField.update(item.message);//errors.getByfiel(item.field);
			 
			 errorField.show();
			
			
		},this);
	
	    //fieldset.setInstructions("Please amend the flagged fields");
	},
	
	resetFormErrors: function() {
		var f = this.getFields();

		for(byName in f) {// no funciona con Ext.each
			this.resetFieldError(this.getFields(byName));
		}

	},
	
	resetFieldError: function(field) {
	    var errorField = this.down('#'+field.name+'ErrorField');
	    errorField.hide();
	    field.removeCls('invalid-field');
	    return errorField;
	}
	 
});

//Ext.reg('App.views.FormBase', App.views.FormBase);