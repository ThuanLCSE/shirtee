var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var   ObjectId = Schema.ObjectId;

var designerSchema = new Schema({
	displayName : {
        type: String, 
        required: 'gender required'
      }, 
    bankAccount: {
    	name: String,
        number: String,
        expiredYear: Number,
        expiredMonth: Number        
    },
    joinedDay: {
         type: Date,
        default: Date.now
    },
    level: {
        levelId: {
            type: ObjectId,
            required: 'id require'
        },
        detail:String
    },
    userEmail :{
        type: String, 
        required: 'email required'
    }
});

mongoose.model('Designer', designerSchema);
