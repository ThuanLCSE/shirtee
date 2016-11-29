var userCtrller = require('../controller/user.ctrl'); 

module.exports = function(app){
	app.route('/api/user/signIn')
	.post(userCtrller.signIn);
	app.route('/api/user/signUp')
	.post(userCtrller.checkEmailNotExist,userCtrller.signUp);
}