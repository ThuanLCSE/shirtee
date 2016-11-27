var configDetail = require('./config'),
	mongoose = require('mongoose');

module.exports = function(){
	var noSqlDb = mongoose.connect(configDetail.dbUrl);

	// require('../serverApp/models/bookingTime');
	// require('../serverApp/models/user');
	// require('../serverApp/models/doctor'); 

	return noSqlDb;
}