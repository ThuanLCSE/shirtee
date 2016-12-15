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
exports.uploadImage64Encode = function(req, res){
	req.body.image = req.body.image.replace(/^data:image\/\w+;base64,/, "");
	req.body.image = req.body.image.replace(/ /g, '+');
	var buff = new Buffer(req.body.image, 'base64');
	var fileName = './upload/'+ Date.now()+ '.jpeg';
	var fd =  fs.openSync(fileName, 'w');

	fs.write(fd, buff, 0, buff.length, 0, function(err,written){
	    console.log( ">> "+ err );
	    fs.closeSync( fd ); 
	    res.status(200).send({
	    	pictureUrl: fileName
	    });
	});
        

};
