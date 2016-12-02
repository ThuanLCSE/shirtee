var Pattern = require('mongoose').model('Pattern'); 

exports.create = function(req,res){
	var expireDay = new Date(); 
    expireDay.setDate(expireDay.getDate()+ req.level.expireTime);
	var newPattern = new Pattern({ 
    	url: req.body.url,
	    designer: req.designer.displayName,
    	designerId:  req.designer._id,
	    price: req.body.price,
    	catergory: req.body.catergory,
	    expireDay: expireDay, 
    	recommendShirt: req.body.shirt?mongoose.Types.ObjectId(req.body.shirt._id):null,
	    recommendPattern: {
	    	position: req.body.position?req.body.position:null,
	    	size: req.body.size?req.body.size:null,
	    	rotate: req.body.rotate?req.body.rotate:null
	    }, 
    	name: req.body.name,
	    recommendUrl: req.body.shirt?mongoose.Types.ObjectId(req.body.shirt.url):null,
	});
	
  	newPattern.save(function (err, pattern) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		pattern : pattern,
	  		message : 'create success',
	  	});
	  }
  });
};

exports.delete = function(req,res){
	
	var pattern = req.pattern;
	pattern.available = false;
  	pattern.save(function (err) {
	  if (err ) {
	  	res.status(400).send(err);
	    } else { 
		  	res.status(200).send({
		  		message: 'remove pattern success' 
		  	}); 
	  	}
 	});
};


exports.increaseSale = function(req,res,next){
	req.pattern.saleTime += 1;
	next();
};

exports.updatePattern = function(req,res){
	
	var pattern = req.pattern; 
  	pattern.save(function (err,updatedPattern) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		message: 'update status success',
	  		pattern: updatedPattern,
	  	}); 
	  }
  });
};
exports.updatePattern = function(req,res){
	
	var pattern = req.pattern; 
  	pattern.save(function (err,updatedPattern) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		message: 'update status success',
	  		pattern: updatedPattern,
	  	}); 
	  }
  });
};
exports.setAcceptStatus = function(req,res,next){
	req.pattern.status = 'Approve';
	next();
}

exports.getByID = function(req,res,next){
	 
  	Pattern.findById(req.param('patternId')).exec(function (err, pattern) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else 
	  if (pattern === null){
	  	res.status(400).send({
	  		message: 'not found pattern Id'
	  	});
	  }
	  	else { 
	   		req.pattern = pattern;
	   		next();
	  }
  });
};
exports.getAllOfDesigner = function(req,res){
	 
  	Pattern.find({
  		designerId: req.designer._id
  	}).exec(function (err, patterns) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		listPattern : patterns,
	  		message : 'get all designer success',
	  	});
	  }
  });
};

exports.getAll = function(req,res){
	 
  	Pattern.find().sort({vote:-1}).exec(function (err, patterns) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		listPattern : patterns,
	  		message : 'get all success',
	  	});
	  }
  });
};

 