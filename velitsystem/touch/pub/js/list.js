

var list = new Ext.Application({
	name: 'list',
	
	launch: function () {
	
    Ext.regModel('DesktopMenu', {
        fields: [{
            name: 'id',
            type: 'int',
            mapping: '_dex_row_menu_id'
        }, 'text', 'parent']
    });
	
    var store = new Ext.data.JsonStore({
//      autoLoad: true,
//      proxy: {
//          type: 'scripttag',
//          url: 'http://sencha.com/forum/forums-remote.php'
//      }
      model: 'DesktopMenu',
      getGroupString: function(record) {
          return record.get('parent');
      },
      data: [{_dex_row_menu_id: 1, text: 'nombre menu',parent: 'description', controller: 'el controlador', action:'accion a ejecutar'},
		       {_dex_row_menu_id: 2, text: 'nombre menu 2',parent: 'description', controller: 'el controlador', action:'accion a ejecutar'}]
  });
	
	
	new Ext.Panel({
		fullscreen: true,
		//layout: 'fit',
        dockedItems: [{
            dock: 'top',
            xtype: 'toolbar',
            title: 'Sencha Forums'
        }],
        items: [{
            xtype: 'list',
            itemTpl: '{text}',
            grouped: true,
            store: store,
            onItemDisclosure: true,

            listeners: {
                'disclose': function(item, node, index, eventObj) {
                    console.debug('disclose');
                },
                'destroy': function(thisComponent) {
                	console.debug('destroy');
                }
            }
        }]
    });
	
}});