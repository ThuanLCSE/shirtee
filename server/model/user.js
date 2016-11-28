var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var   ObjectId = Schema.ObjectId;
var OrderSchema = new Schema({
    orderId: {
        type: ObjectId,
        required: 'order id require'
    },
    buyDay: {
    	 type: Date,
        default: Date.now
    },
    total: {
    	type: Number
    },
    status: {
    	type: String
    }
});

var userSchema = new Schema({
	fullname : {
        type: String,
        trim: true, 
        required: 'Name required'
      },
    password :{
    	type: String,
    	required: 'Password required'
    },
    email: {
    	type: String,
    	required: 'email required'
    },
    OrderHistory: [
   	 OrderSchema
    ],
    createdDay: {
    	type: Date,
        default: Date.now
    },
    active: Boolean,
    gender: String,
    birthday: Date
});

mongoose.model('User', userSchema);
