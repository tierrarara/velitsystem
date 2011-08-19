/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package App
 * @subpackage View
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id$
 */

App.views.CustomerAttention = Ext.extend(Ext.TabPanel, {

	initComponent : function() {

		var config = {
			tabBar : {
				dock : 'bottom',
				ui : 'light',
				layout : {
					pack : 'center'
				}
			},
			cardSwitchAnimation : {
				type : 'slide',
				cover : true
			},
			defaults : {
				scroll : 'vertical'
			}
		};

		Ext.apply(this, config);

		App.views.CustomerAttention.superclass.initComponent.call(this);
	}

});

Ext.reg('App.views.CustomerAttention', App.views.CustomerAttention);