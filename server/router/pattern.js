var patternCtrller = require('../controller/pattern.ctrl'); 
var adminCtrller = require('../controller/admin.ctrl'); 

module.exports = function(app){
 
	app.route('/api/admin/pattern/listAll')
	.get(adminCtrller.checkAdminRole,patternCtrller.getAll);
	app.route('/api/user/pattern/listAll')
	.get(patternCtrller.getAllAvailable);
	app.route('/api/pattern/remove/:patternId')
	.get(patternCtrller.getByID,
		adminCtrller.checkAdminRole, patternCtrller.delete);
	
	app.route('/api/pattern/approve/:patternId')
	.get(patternCtrller.getByID,patternCtrller.setAcceptStatus,
		adminCtrller.checkAdminRole, patternCtrller.updatePattern);
	app.route('/api/pattern/addSale/:patternId')
	.get(patternCtrller.getByID,patternCtrller.increaseSale,
		adminCtrller.checkAdminRole, patternCtrller.updatePattern); 
	app.route('/api/pattern/info/:patternId')
	.get(patternCtrller.getByID, patternCtrller.returnPattern); 
	app.route('/api/pattern/listAll')
	.get(patternCtrller.getAll); 

	
}