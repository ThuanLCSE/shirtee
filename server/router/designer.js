var designerCtrller = require('../controller/designer.ctrl'); 

module.exports = function(app){
	app.route('/api/designer/register')
	.post(designerCtrller.checkBeDesigner, designerCtrller.register); 
}