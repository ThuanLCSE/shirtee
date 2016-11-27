module.exports = function(app){
	var userCtrller = require('../controller/user.ctrl');
	var bookingTimeCtrler = require('../controller/bookingTime.ctrl');
	app.route('/api/patient/register')
	.post(userCtrller.checkIPNotExist,userCtrller.register);
	app.route('/api/patient/cancel').get(userCtrller.cancelBookingByIP);
	app.route('/api/patient/nearShift').get(bookingTimeCtrler.getNearestShift);
	app.route('/api/patient/edit').post(userCtrller.editRegisterInfo);
	app.route('/api/patient/current').get(userCtrller.getBookingAmount);
	app.route('/api/patient/info').get(userCtrller.getRegisterInfo);
}