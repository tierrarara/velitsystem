/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage View
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

App.views.DesktopIndex = Ext.extend(Ext.TabPanel, {

    initComponent: function() {
    	Ext.apply(this, {
    		title: 'Tab Panel',
    		id: 'DesktopIndex',
    		fullscreen: false,
    		tabBar: {
    			dock: 'bottom',
    			scroll: 'horizontal',
    			sortable: true,
    			layout: {
    				pack: 'center'
    			}
    		},
    		items: [
                    { iconCls: 'bookmarks', title: 'Bookmarks', html:  ' html Bookmarks'  },
                    { iconCls: 'download', title: 'Download', html: 'tab Download' },
                    { iconCls: 'favorites', title: 'Favorites',html: 'tab Favorites' },
                    { iconCls: 'info', title: 'Info' },
                    { iconCls: 'more', title: 'More' },
                    { iconCls: 'search', title: 'Search' },
                    { iconCls: 'settings', title: 'Settings' },
                    { iconCls: 'team', title: 'Team' },
                    { iconCls: 'time', title: 'Time' },
                    { iconCls: 'user', title: 'User' }
                ]
    	})
    	App.views.DesktopIndex.superclass.initComponent.call(this);
    }
});

Ext.reg('App.views.DesktopIndex', App.views.DesktopIndex);