var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var   ObjectId = Schema.ObjectId;

var customShirtSchema = new Schema({
	shirt:{
        url : {
            type: String, 
            required: 'shirt url required'
        }, 
    },
    pattern: {
        url : {
            type: String, 
            required: 'pattern url required'
        }, 
        id : {
            type: ObjectId, 
            required: 'shirt id required'
        },
        position: {
            x: Number,
            y: Number
        },
        size: Number,
        rotate: Number
    },
    size: String,
    detail: {
        type: String,
        required: 'detail required'
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
