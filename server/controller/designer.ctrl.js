var Designer = require('mongoose').model('Designer'); 
var Level = require('mongoose').model('Level'); 

exports.register = function(req,res){
	
	Level.findOne({ 
  		numberShirt : 0
  	 }, function (err, level) {
  	 	if (err || level === null){
  	 		res.status(400).send(err);
  	 	} else {
  	 		var levelOne = {
		        levelId:  level._id,
		        detail: level.detail
		    } 
		    var newDesigner = new Designer({
				displayName : req.body.displayName, 
			    bankAccount: req.body.bankAccount, 
			    userEmail: req.session.user.email,
			    level: levelOne 
			});
		    newDesigner.save(function (err, design) {
				  if (err) {
				  	res.status(400).send(err);
				  }  else { 
				  	res.status(200).send({
				  		designer : design,
				  		message : 'register designer success',
				  	});
				}
			});

  	 	}
  	 }); 
};
exports.checkDesignerNotExist = function(req,res,next){  

    Designer.findOne({ 
  		userEmail:  req.session.user.email
  	 }, function (err, designer) {
		  if (err || designer !== null) {
		  	res.status(400).send(err?err:{message: 'designer already exist'});
		  }  else { 
		  	next();
		}
	});
 
};


exports.getById = function(req,res,next){  
 
  	Designer.findById(req.param('designerId')).exec(function (err, designer) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else 
	  if (designer === null){
	  	res.status(400).send({
	  		message: 'not found designer Id'
	  	});
	  }
	  	else { 
		   		req.designer = designer;
		   		next();
		  }
	  });
};
exports.returnLevel = function(req,res){
	var level = req.level; 

  	res.status(200).send({
  		message: 'update status success',
  		level: level,
  	});  
}

exports.getLevelById = function(req,res,next){
	Level.findById(req.designer.level.levelId).exec(function (err, level) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else 
	  if (level === null){
	  	res.status(400).send({
	  		message: 'not found level Id'
	  	});
	  }
	  	else { 
		   		req.level = level;
		   		next();
		  }
	  });
}

