var configDetail = require('./config'),
	http = require('http'),
	expressWebAppFramwrk = require('express'),
	cors = require('cors'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	session = require('express-session'),	 
	path = require('path');
var favicon = require('serve-favicon');

module.exports = function(database) { 
	var app = expressWebAppFramwrk();
	var server = http.createServer(app); 
	
	app.use(morgan('dev'));  
	app.use(favicon(__dirname + './../static/Beer.ico'));
 
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

	app.use('/static', expressWebAppFramwrk.static(path.join(__dirname, './../static')));
	app.use('/upload', expressWebAppFramwrk.static(path.join(__dirname, './../upload')));

	app.use(cors({
        origin: 'http://localhost:3013',
        credentials: true
                 }));
	require('../server/router/react.component.js')(app);
	require('../server/router/category.js')(app);  
	require('../server/router/shirt.js')(app);  
	require('../server/router/pattern.js')(app);  
	require('../server/router/user.js')(app);  
		require('../server/router/admin.js')(app);  
 	require('../server/router/designer.js')(app);  
 	require('../server/router/saleProgram.js')(app);  
	require('../server/router/common.js')(app); 

	return server;
}