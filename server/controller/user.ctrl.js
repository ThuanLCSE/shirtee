var User = require('mongoose').model('User'); 

exports.signUp = function(req,res){
	var newUser = new User({
		email : req.body.email,
		password : req.body.password,
		fullname : req.body.fullname,
	});
	
  	newUser.save(function (err, user) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else {
	  	var newSession = req.session;
			var authenticateduser = {
				id : user._id
			};
			newSession.user = authenticateduser;
	  	res.status(200).send({
	  		user : user,
	  		message : 'sign up success',
	  	});
	  }
  });
};

exports.signIn = function(req,res){
	var data = {};
	data.email = req.body.email;
	data.password = req.body.password;
  	User.findOne({ 
  		email: data.email,
  		password: data.password
  	 }, function (err, user) {
	  if (err) {
	  	res.status(400).send(err);
	  } else if (user === null) {
 		res.status(400).send('not auth');
	  } else {
	  	var newSession = req.session;
			var authenticateduser = {
				id : user._id
			};
			newSession.user = authenticateduser;
	  	res.status(200).send({
	  		user:user,
	  		message: "sign in success",
	  	});
	  }
  });
};

exports.checkEmailNotExist = function(req,res,next){
	var currentEmail = req.body.email;

  	User.findOne({ 
  		email: currentEmail
  	}, 
	function(err, user) {
	    if (err ) {
	      return res.status(400).send(err);
	    } else if (user === null){
	    	next();
	    } 
	    else {
	      res.status(200).send({
	  			message: 'email already exist'
  			}); 
    }
  });
};