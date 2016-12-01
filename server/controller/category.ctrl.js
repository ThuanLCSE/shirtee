var Category = require('mongoose').model('Category'); 

exports.create = function(req,res){
	var newCat = new Category({  
    	name: req.body.name
	});
	
  	newCat.save(function (err, category) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		category : category,
	  		message : 'create category success',
	  	});
	  }
  });
};

exports.delete = function(req,res){ 
	var category = req.category; 
  	category.remove(function (err) {
	  if (err) {
	  	res.status(400).send(err);
	    } else { 
		  	res.status(200).send({
		  		message: 'remove category success'
		  	}); 
	  	}
 	});
}; 

exports.getByID = function(req,res,next){
	 
  	Category.findById(req.param('categoryId'))
  	.exec(function (err, category) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else 
	  if (category === null){
	  	res.status(400).send({
	  		message: 'not found category Id'
	  	});
	  }
	  	else { 
	   		req.category = category;
	   		next();
	  }
  });
}; 

exports.getAll = function(req,res){
	 
  	Category.find()
  	.exec(function (err, categories) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		listCategory : categories,
	  		message : 'get all success',
	  	});
	  }
  });
};

 