var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var   ObjectId = Schema.ObjectId;

var shirtSchema = new Schema({
	gender : {
        type: String, 
        required: 'gender required'
      }, 
    url: {
    	type: String,
    	required: 'url required'
    },
    detail: {
        type: String,
        required: 'detail required'
    },
    layoutUrl: {
        type: String,
        required: 'layout url required'
    },
    price: Number,
    colorCode: []
});

mongoose.model('Shirt', shirtSchema);
