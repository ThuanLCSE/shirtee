var Pattern = require('mongoose').model('Pattern'); 
var SaleProgramme = require('mongoose').model('SaleProgramme'); 
var ObjectId = require('mongoose').Types.ObjectId; 

exports.create = function(req,res){
	var expireDay = new Date(); 
    expireDay.setDate(expireDay.getDate()+ req.level.expireTime);
	var reqPattern = { 
    	url: req.body.url,
	    designer: req.designer.displayName,
    	designerId:  req.designer._id,
	    price: req.body.price,
    	category: req.body.category,
	    expireDay: expireDay, 
	    recommendShirt: {},
    	recommendPattern: {}, 
    	name: req.body.name
	};
	reqPattern.recommendPattern = {
		position: req.body.position?req.body.position:null,
    	size: req.body.size?req.body.size:null,
    	rotate: req.body.rotate?req.body.rotate:null
    };
	reqPattern.recommendShirt = {
		url: req.body.recommendShirtUrl?req.body.recommendShirtUrl:null,
        id: req.body.recommendShirtId?req.body.recommendShirtId:null,
        colorCode: req.body.recommendShirtId?req.body.colorCode:null
    };
    var newPattern = new Pattern(reqPattern);
	
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
 
exports.updateVoting = function(req,res,next){
	var newVoteQuantity = req.pattern.voteQuantity + 1;
	req.pattern.vote = (req.body.vote + (req.pattern.vote * req.pattern.voteQuantity))/newVoteQuantity;
	req.pattern.voteQuantity = newVoteQuantity;
	next();
};


exports.increaseSale = function(req,res,next){
	req.pattern.saleTime += 1;
	next();
};

exports.returnPattern = function(req,res){
	
	var pattern = req.pattern; 
 
	  	res.status(200).send({
	  		message: 'update status success',
	  		pattern: pattern,
	  	});  
};
exports.updatePattern = function(req,res){
	
	var pattern = req.pattern; 
  	pattern.save(function (err,updatedPattern) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		message: 'update success',
	  		pattern: updatedPattern,
	  	}); 
	  }
  });
};
exports.setAcceptStatus = function(req,res,next){
	req.pattern.createdDay = new Date();
	req.pattern.status = 'approve';
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

exports.getAllAvailable = function(req,res){ 
  	Pattern.find({status: 'approve', available: true}).exec(function (err, patterns) {
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

exports.getAllNewest= function(req,res){ 
  	Pattern.find({status: 'approve', available: true}).sort({createdDay:-1}).exec(function (err, patterns) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		listPattern : patterns,
	  		message : 'get all newest success',
	  	});
	  }
  });
};


exports.getAllBestSell = function(req,res){ 
  	Pattern.find({status: 'approve', available: true}).sort({saleTime:-1}).exec(function (err, patterns) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		listPattern : patterns,
	  		message : 'get all best sell success',
	  	});
	  }
  });
};

exports.getAllSale = function(req,res){
 
    var saleIdList = [];    
  	for (patternId in req.saleProgramme.patternSale){
  		saleIdList.push(ObjectId(patternId));
  	}	    
  	Pattern.find({
	    '_id': { $in: saleIdList}
	}, function(err, patterns){
		 if (err) {
		  	res.status(400).send(err);
		  }  else {
		  	res.status(200).send({
		  		listPattern : patterns,
		  		saleProgramme: req.saleProgramme,
		  		message : 'get all sale success',
		  	});
		  }
	});
	   
}

 