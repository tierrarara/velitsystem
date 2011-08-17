/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package Test
 * @subpackage Pagination
 * @copyright Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license http://www.velitsystem.com/licence
 * @version $Id$
 */


var st;

var list = new Ext.Application({
	name: 'list',
	
	launch: function () {  
	// ///////////////////////////////////
	
		Ext.regModel('test', {
			fields : ['id', 'name'],
			idProperty: 'id',
			proxy: {
				type: 'ajax',
				url : 'test/paginations',
				reader: {
					root: 'data',
					idProperty: 'id'// , totalProperty: 'total'
				}
			}
		});

		st = new Ext.data.Store({
			id: '_st',
			 model: 'test',
			 autoLoad: true,
			 pageSize: 1,
			 clearOnPageLoad: false
				
		});

	
		this.vp = new Ext.Panel({
			fullscreen:true,
			layout:'card',
			
			items:[{
				xtype:'list',
				id: 'L',
				store: st,
				
				grouped: false,
				itemTpl:'<div class="">{name} - <small>{id}</small></div>',
				onItemDisclosure: true,
				plugins: [new Ext.plugins.ListPagingPlugin({
					 autoPaging: false,
					 loadMoreText: '...'
				 })]
			}]
			 
			
		});

	}
});

/*
 * command test on console
 * 
 * multiple form panel in one panel
Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function(){
    
        var formBase = {
            scroll: 'vertical',
            height: 385,
            width: 480,
            items: [{
                xtype: 'fieldset',
                title: 'Personal Info',
                instructions: 'Please enter the information above.',
                defaults: {
                    required: true,
                    labelAlign: 'left'
                },
                items: [{
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Name'
                }, {
                    xtype: 'passwordfield',
                    name: 'password',
                    label: 'Password'
                }, {
                    xtype: 'textfield',
                    name: 'disabled',
                    label: 'Disabled',
                    disabled: true
                }]
            }]
        };
        
        var ct = new Ext.Container({
            layout: 'hbox',
            fullscreen: true,
            items: [new Ext.form.FormPanel(formBase), new Ext.form.FormPanel(formBase)]
        });
        
        ct.items.each(function(form){
            form.addClass('x-floating');
            delete form.lastSize;
            form.doComponentLayout(form.width, form.height);
            form.el.setStyle('position', 'relative !important');
        });
    }
});





 */