var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var   ObjectId = Schema.ObjectId;

var customShirtSchema = new Schema({
	url : {
        type: String, 
        required: 'url required'
      }, 
    size: {
    	type: String,
    	required: 'size required'
    },
    shirtType: {
        type: String,
        required: 'type required'
    },
    pattern: {
        type: ObjectId,
        required: 'pattern id required'
    },
    price: {
        type: Number,
        required: 'price  required'
    },
    quantity: {
    	type: Number,
    	default: 0
    },
    colorCode: {
       type: String,
        required: 'color code required',
    }
});

mongoose.model('CustomShirt', customShirtSchema);
