var userCtrller = require('../controller/user.ctrl'); 

module.exports = function(app){
	app.route('/api/user/signIn')
	.post(userCtrller.signIn);
	app.route('/api/user/signUp')
	.post(userCtrller.checkEmailNotExist,userCtrller.signUp);
	app.route('/api/user/remove/:userId')
	.post(userCtrller.getById,userCtrller.delete);
	app.route('/api/user/update/:userId')
	.post(userCtrller.getById,userCtrller.updateInfo);
	app.route('/api/pattern/listAll')
	.post(userCtrller.getById,userCtrller.updateInfo);
	
}