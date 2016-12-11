var adminCtrller = require('../controller/admin.ctrl'); 
var saleCtrller = require('../controller/saleProgram.ctrl'); 
 
module.exports = function(app){ 
  
	app.route('/api/sale/create/')
	.post(adminCtrller.checkAdminRole, saleCtrller.create); 
	app.route('/api/sale/getAll/')
	.get(adminCtrller.checkAdminRole, saleCtrller.getAll); 
	
	app.route('/api/sale/remove/')
	.post(adminCtrller.checkAdminRole, saleCtrller.remove); 
	
}