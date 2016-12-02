var Admin = require('mongoose').model('Admin');  
 
exports.signIn = function(req,res){
	var data = {};
	data.email = req.body.email;
	data.password = req.body.password;
  	User.findOne({ 
  		email: data.email,
  		password: data.password
  	 }, function (err, admin) {
	  if (err) {
	  	res.status(400).send(err);
	  } else if (admin === null) {
 		res.status(400).send('wrong email or password');
	  } else {
	  	var authenticateduser = { 
			email: admin.email
		};
		req.session.admin = authenticateduser;
	  		res.status(200).send({
			  		admin:admin,
			  		message: "sign in as admin success",
			  	});
			
	  }
  });
}; 
exports.checkAdminRole = function(req,res,next){
	if (!req.session.admin){
		res.status(200).send({
	  		message: 'not authorized' 
	  	});
	} else {
		next();
	}
	
};
exports.signOut = function(req,res){
	req.session.admin = null; 
	  if (req.session.admin) { 
 		res.status(400).send('sign out failed');
	  } else {  
		res.status(200).send({
			message: "sign out success",
	  	});    
	  }
};
    