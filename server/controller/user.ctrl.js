var User = require('mongoose').model('User'); 
var Designer = require('mongoose').model('Designer'); 

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
				email: user.email,
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
 		res.status(400).send('wrong email or password');
	  } else {
	  	var newSession = req.session;
			var authenticateduser = {
				email: user.email,
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
exports.checkAuthenticated = function(req,res){
	var userInSession = req.session.user;

   
	  if (!userInSession) { 
 		res.status(400).send('user not signin');
	  } else { 
	  	 Designer.findOne({ 
  			userEmail:  userInSession.email
	  	 }, function (err, designer) {
			if (err) {
			  	res.status(400).send(err);
			}  else if (designer == null) { 
			  	res.status(200).send({
			  		user:userInSession,
			  		message: "sign in as user",
			  	});   
			} else {
				res.status(200).send({
					user: userInSession,
			  		designer:designer,
			  		message: "sign in as designer",
			  	});   
			}
		});
	  	
	  }
};

exports.signOut = function(req,res){
	req.session.user = null;

   
	  if (req.session.user) { 
 		res.status(400).send('sign out failed');
	  } else {  
		res.status(200).send({
			message: "sign out success",
	  	});    
	  }
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
exports.updateInfo = function(req,res){
	var user = req.user;
	user.fullname = req.body.fullname?req.body.fullname:user.fullname;
	user.password = req.body.password?req.body.password:user.password;
	user.gender = req.body.gender?req.body.gender:user.gender;
	user.birthday = req.body.birthday?req.body.birthday:user.birthday;
  	user.save(function (err,updatedUser) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		message: 'update user success',
	  		user: updatedUser,
	  	}); 
	  }
  });
};
exports.delete = function(req,res){
	
	var user = req.user;
	user.active = false;
  	user.save(function (err,removedUser) {
	  if (err) {
	  	res.status(400).send(err);
	    } else { 
		  	res.status(200).send({
		  		message: 'remove user success',
		  		user: removedUser,
		  	}); 
	  	}
 	});
};
exports.getById = function(req,res,next){ 
  	User.findById(req.param('userId')).exec(function (err, user) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else 
	  if (user === null){
	  	res.status(400).send({
	  		message: 'not found user Id'
	  	});
	  }
	  	else { 
	   		req.user = user;
	   		next();
	  }
  });
};