var designerCtrller = require('../controller/designer.ctrl'); 
var patternCtrller = require('../controller/pattern.ctrl'); 

module.exports = function(app){
	app.route('/api/designer/register')
	.post(designerCtrller.checkDesignerNotExist, designerCtrller.register); 
	app.route('/api/designer/pattern/create/:designerId')
	.post(designerCtrller.getById, patternCtrller.create); 
	app.route('/api/designer/pattern/listAll/:designerId')
	.get(designerCtrller.getById, patternCtrller.getAllOfDesigner); 

}