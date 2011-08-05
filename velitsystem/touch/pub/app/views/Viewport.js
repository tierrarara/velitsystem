/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package View
 * @subpackage Viewport
 * @copyright  Velit System
 * @license  
 * @version $Id$
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