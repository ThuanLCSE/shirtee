var fs = require('fs');

exports.imageForm = function(req, res) {
	console.log(req.body);
   res.status(204).end();
};

exports.uploadImage = function(req, res){
		var picturePath = req.file.path;   
        var pictureInfo = {
        	path: req.file.path,
        	name: req.file.filename
        } 
        res.status(200).send(pictureInfo);

};