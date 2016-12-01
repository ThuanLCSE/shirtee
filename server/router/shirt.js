var shirtCtrller = require('../controller/shirt.ctrl'); 

module.exports = function(app){
	app.route('/api/shirt/listAll')
	.get(shirtCtrller.getAll);
}