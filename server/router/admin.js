var adminCtrller = require('../controller/admin.ctrl'); 

module.exports = function(app){
	app.route('/api/admin/signIn')
	.post(adminCtrller.signIn); 
	app.route('/api/admin/signOut')
	.get(adminCtrller.signOut);
	 
}