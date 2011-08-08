/**
 * @category   Touch Velit
 * @author     Rafael Guerrero <tierrarara@gmail.com>
 * @package    App
 * @subpackage View
 * @copyright  Copyright (c) 2011 Velit System (http://www.velitsystem.com)
 * @license    http://www.velitsystem.com/licence
 * @version    $Id$
 */

App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    
    initComponent: function() {
        Ext.apply(this, {
            html: 'Velit System'
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    
    /**
     * @param App.views.Viewport
     */
    onShow: function (vp) {
    	App.loadSetup();
    }
});