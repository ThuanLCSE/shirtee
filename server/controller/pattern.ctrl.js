var Pattern = require('mongoose').model('Pattern'); 

exports.create = function(req,res){
	var newUser = new Pattern({
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
 