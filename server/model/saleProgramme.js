var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var   ObjectId = Schema.ObjectId;
var shirtSaleSchema = new Schema({
    shirtId: {
        type: ObjectId,
        required: 'shirt id require'
    },
    shirtUrl:{
        type: String,
        trim: true, 
        required: 'url shirt required'
    }
});

var saleProgrammeSchema = new Schema({
	percentage : {
        type: Number, 
        required: 'percentage required'
      }, 
    detail: {
    	type: String,
    	required: 'detail required'
    },
    shirtSale: [
   	 shirtSaleSchema
    ],
    startDay: {
    	type: Date,
        default: Date.now
    },
    endDay: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('SaleProgramme', saleProgrammeSchema);
