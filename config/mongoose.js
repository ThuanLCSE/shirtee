var configDetail = require('./config'),
	mongoose = require('mongoose');

module.exports = function(){
	var noSqlDb = mongoose.connect(configDetail.dbUrl);
 
	require('../server/model/user'); 
	require('../server/model/customShirt'); 
	require('../server/model/designer'); 
	require('../server/model/level'); 
	require('../server/model/order'); 
	require('../server/model/pattern'); 
	require('../server/model/saleProgramme'); 
	require('../server/model/shirt'); 

	return noSqlDb;
}