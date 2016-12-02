var categoryCtrller = require('../controller/category.ctrl'); 

module.exports = function(app){ 
	app.route('/api/category/listAll')
	.get(categoryCtrller.getAll);  
}