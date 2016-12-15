var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var   ObjectId = Schema.ObjectId;
 
var patternSchema = new Schema({
	status : {
        type: String, 
        default: 'pending'
      }, 
    url: {
    	type: String,
    	required: 'url required'
    },
    designer: {
        type: String,
        required: 'designer required'
    },
    designerId: ObjectId,
    price: {
        type: Number,
        required: 'price required'
    },
    category: [],
    expireDay: {
    	type:Date,
    	 required: 'expire required'
    },
    createdDay: {
    	type: Date,
    	default: Date.now
    },
    recommendShirt:{
        url:  String,
        id:  ObjectId,
        colorCode: String
    },
    recommendPreviewUrl : String,
    recommendPattern: {
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
    available: {
        type: Boolean,
        default: true
    }
});

mongoose.model('Pattern', patternSchema);
