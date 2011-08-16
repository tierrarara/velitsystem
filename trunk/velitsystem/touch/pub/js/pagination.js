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
				url : '/test/paginations',
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
 * 
 */