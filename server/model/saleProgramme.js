var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var   ObjectId = Schema.ObjectId;
var patternSaleSchema = new Schema({
    patternId: {
        type: ObjectId,
        required: 'pattern id require'
    },
    patternUrl:{
        type: String,
        trim: true, 
        required: 'pattern url required'
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
    patternSale: [
   	 patternSaleSchema
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
