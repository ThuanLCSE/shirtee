var User = require('mongoose').model('User'); 
var errorHandler = require('./error.handle.ctrl');
var ObjectId = require('mongodb').ObjectID;

exports.register = function(req,res){
	var newUser = new User(req.body.user);  
	User.find().sort({bookingNumber:-1}).limit(1).exec(function(err, userMax){
	    newUser.IP = req.connection.remoteAddress || req.headers['x-forwarded-for'];
	    console.log(userMax);
	    if (userMax.length>0){
	    	newUser.bookingNumber = userMax[0].bookingNumber + 1;
	    } else {
	    	newUser.bookingNumber = 1;
	    } 
	  	newUser.save(function(err, user) {
	    if (err) { 
	      return res.status(400).send(err );
	    } else {
	      res.status(200).send({
		  			message: 'register success',
		  			user : user
	  			});
	    }
	  });
	});
	
};
exports.getBookingAmount = function(req,res){
	User.count({}, function(err, count){
		if (err) {
	      return res.status(400).send(errorHandler.getErrorMessage(err));
	    } else {
	      res.status(200).send({
	  			count: count
  			});
		}
	});
}
exports.cancelBookingByIP = function(req,res){
	var userIP = req.connection.remoteAddress || req.headers['x-forwarded-for'];; 

  	User.findOneAndRemove({
  	 IP: userIP
  	}, 
	function(err) {
	    if (err) {
	      return res.status(400).send(
	  				errorHandler.getErrorMessage(err)
	  			);
	    } else {
	      res.status(200).send({
	  			message: 'cancel booking success' 
  			});
    }
  });
};

exports.removeBookigById = function(req,res){
	var userId = req.body.patientId;

  	User.findByIdAndRemove(userId,
	function(err) {
	    if (err) {
	      return res.status(400).send(
	  				errorHandler.getErrorMessage(err)
	  			);
	    } else {
	      res.status(200).send({
	  			message: 'remove booking success' 
  			});
    }
  });
};
exports.getRegisterInfo = function(req,res){
	var currentUserIP = req.connection.remoteAddress || req.headers['x-forwarded-for'];

  	User.findOne({ 
  	 IP: currentUserIP
  	}, 
	function(err, user) {
	    if (err ) {
	      return res.status(400).send(
	  				errorHandler.getErrorMessage(err)
	  			);
	    }  else if (user === null){
	    	return res.status(400).send(
	  				"User not exist"
	  			);

	    } 
	    else {
	    	user.IP = null;
	      	res.status(200).send({
	  			message: 'register success',
	  			user: user
  			}); 
	    }
	});
}
exports.editRegisterInfo = function(req,res){
	var currentUserIP = req.connection.remoteAddress || req.headers['x-forwarded-for'];
	var editUser = req.body.user;
  	User.findOne({ 
  	 IP: currentUserIP
  	}, 
	function(err, user) {
	    if (err ) {
	      return res.status(400).send(
	  				errorHandler.getErrorMessage(err)
	  			);
	    }  else if (user === null){
	    	return res.status(400).send(
	  				"User not exist"
	  			);

	    } 
	    else {
	    	user.name=  editUser.name;
	    	user.phone=  editUser.phone;
	    	user.address=  editUser.address;
	    	 user.save(function(err, returnUser) {
                if (err) { 
                    return res.status(400).send(err);
                } else {
                    return res.status(200).send({
                      message: 'updated success',
                      user: returnUser
                    });
                }
            });
	    }
	});
}
exports.checkIPNotExist = function(req,res,next){
	var currentUserIP = req.connection.remoteAddress || req.headers['x-forwarded-for']; 

  	User.findOne({ 
  	 IP: currentUserIP
  	}, 
	function(err, user) {
	    if (err ) {
	      return res.status(400).send(
	  				errorHandler.getErrorMessage(err)
	  			);
	    } else if (user === null){
	    	next();
	    } 
	    else {
	      res.status(200).send({
	  			message: 'user already exist'
  			}); 
    }
  });
};
exports.getListUser = function(req,res){
	 
  	User.find({
  	}, 
	function(err, users) {
	    if (err ) {
	      return res.status(400).send(
	  				errorHandler.getErrorMessage(err)
	  			); 
	    }else {
	      res.status(200).send({
	  			message: 'list user',
	  			users: users
  			}); 
    }
  });
};

exports.removeAllUser = function(req,res){
	User.remove({
  	}, 
	function(err) {
	    if (err ) {
	      return res.status(400).send(
	  				errorHandler.getErrorMessage(err)
	  			); 
	    }else {
	      res.status(200).send({
	  			message: 'remove user' 
	  			}); 
	    }
	  });
} 