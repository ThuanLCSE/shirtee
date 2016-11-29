var configDetail = require('./config'),
	http = require('http'),
	expressWebAppFramwrk = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	session = require('express-session');
var path = require('path');

module.exports = function(database) { 
	var app = expressWebAppFramwrk();
	var server = http.createServer(app);
	
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: configDetail.secretKey
	}));

	app.use('/static', expressWebAppFramwrk.static(path.join(__dirname, '/../static'), 
		{ maxAge: 86400000 })
	);


	require('../server/router/react.component.js')(app);
	require('../server/router/user.js')(app);  
 
	return server;
}