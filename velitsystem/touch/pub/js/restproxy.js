/**
 * 
 */

Ext.regModel('test', {
	fields : [ {
		name : 'num',
		type : 'int'
	}, 'name', 'description'],
	idProperty: 'num',
	proxy: {
		type: 'rest',
		url : '/test/rest',
		reader: {
			root: 'data',
			idProperty: 'num'
		}
	}
});

var st = new Ext.data.Store({
	 model: 'test',
	 autoload: true
		
});

st.load();


var m1 = Ext.ModelMgr.create({name: 'nuevo', description: 'nueva description'}, 'test');

m1.save();

