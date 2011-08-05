/**
 * @category Touch Velit
 * @author Rafael Guerrero <tierrarara@gmail.com>
 * @package Model
 * @subpackage Config
 * @copyright  Velit System
 * @license  
 * @version $Id$
 */
App.models.Config = Ext.regModel('Config', {
    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'name',
            type: 'string'
        }, {
            name: 'description',
            type: 'string'
        }, {
            name: 'value'
            // type: 'auto'
        }
    ],

    proxy: {
        type: 'localstorage',
        id: 'app-config'
    }
});