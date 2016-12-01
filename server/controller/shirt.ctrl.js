var Shirt = require('mongoose').model('Shirt'); 

exports.create = function(req,res){
	var newShirt = new Shirt({ 
    	gender : req.body.gender, 
   		url: req.body.url,
    	detail: req.body.detail,
	    layoutUrl: req.body.layoutUrl,
    	price: req.body.price,
    	colorCode: req.body.colorCode
	});
	
  	newShirt.save(function (err, shirt) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		shirt : shirt,
	  		message : 'create success',
	  	});
	  }
  });
};
   
exports.getByID = function(req,res,next){
	 
  	Shirt.findById(req.body.shirtId)
  	.exec(function (err, shirt) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else 
	  if (shirt === null){
	  	res.status(400).send({
	  		message: 'not found shirt Id'
	  	});
	  }
	  	else { 
	   		req.shirt = shirt;
	   		next();
	  }
  });
}; 

exports.getAll = function(req,res){
	 
  	Shirt.find()
  	.exec(function (err, shirts) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		listShirt : shirts,
	  		message : 'get all success',
	  	});
	  }
  });
};

 