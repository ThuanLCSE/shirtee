var Sale = require('mongoose').model('SaleProgramme'); 

exports.create = function(req,res){
	var newSaleProgram = new Sale({ 
    	percentage : req.body.percentage, 
   		detail: req.body.detail,
    	patternSale: req.body.patternSale,
	    endDay: req.body.endDay,
    	startDay: req.body.startDay
	});
	
  	newSaleProgram.save(function (err, sale) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		sale : sale,
	  		message : 'create success',
	  	});
	  }
  });
};
   
exports.getListPatternOnSale = function(req,res,next){
	var today = new Date();
  	Sale.find().sort({endDay:-1}).limit(1).exec(function (err, sale) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else if (sale === null || sale.endDay < today) { 
   		res.status(400).send({
	  		message: 'No pattern sale'
	  	});
	  }
	  else if (sale.endDay >= today){
	  	req.saleProgramme = sale;
	  	next();
	  }
  });
}; 

exports.getAll = function(req,res){
	 
  	Sale.find()
  	.exec(function (err, sales) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		listSale : sales,
	  		message : 'get all success',
	  	});
	  }
  });
};

 
exports.remove = function(req,res){
	
	var saleId = req.body.saleId;

  	Sale.findByIdAndRemove(saleId,
  		function (err) {
	 	 if (err ) {
	  		res.status(400).send(err);
	    } else { 
		  	res.status(200).send({
		  		message: 'remove sale success' 
		  	}); 
	  	}
 	});
};