var patternCtrller = require('../controller/pattern.ctrl'); 

module.exports = function(app){
 
	app.route('/api/pattern/listAll')
	.get(patternCtrller.getAll);
	app.route('/api/pattern/remove/:patternId')
	.post(patternCtrller.getByID,patternCtrller.delete);
	app.route('/api/pattern/status/:patternId')
	.post(patternCtrller.getByID,patternCtrller.updateStatus);
	app.route('/api/pattern/listAll')
	.get(patternCtrller.getAll);
	
}