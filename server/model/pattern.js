var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var   ObjectId = Schema.ObjectId;
var categorySchema = new Schema({
    catId: ObjectId
});

var patternSchema = new Schema({
	status : {
        type: String, 
        default: 'out of stock'
      }, 
    url: {
    	type: String,
    	required: 'url required'
    },
    designer: {
        type: String,
        required: 'detail required'
    },
    designerId: ObjectId,
    price: {
        type: Number,
        required: 'detail required'
    },
    catergory: [categorySchema],
    expireDay: {
    	type:Date,
    	 required: 'detail required'
    },
    createdDay: {
    	type: Date,
    	default: Date.now
    },
    recommendShirt: ObjectId,
    recommentPattern: {
    	position: {
    		x: Number,
    		y: Number
    	},
    	size: Number,
    	rotate: Number
    },
    vote: {
    	type: Number,
    	default: 0
    },
    voteQuantity: {
    	type: Number,
    	default: 0
    },
    saleTime: {
    	type: Number,
    	default: 0
    },
    name: String,
    recommendUrl: {
    	type: String,
    	required: 'url required'
    },
    available: {
        type: Boolean,
        default: true
    }
});

mongoose.model('Pattern', patternSchema);
