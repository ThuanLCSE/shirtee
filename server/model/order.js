var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var   ObjectId = Schema.ObjectId;

var customShirtSchema = new Schema({
    customShirtId: {
        type: ObjectId,
        required: 'shirt custom id require'
    },
    type: String,
    quantity: Number,
    price: Number
});
var orderSchema = new Schema({
	soldDay : {
        type: Date, 
        default: Date.now
      }, 
    price: {
    	type: Number,
    	required: 'price required'
    },
    status: {
        type: String,
        required: 'status required'
    },
    shipDay: {
        type: Date,
        required: 'layout url required'
    },
    bankAccount: {
        name: String,
        number: Number,
    },
    preserve: {
       type: Number,
        required: 'preserve price required',
    },
    shirtList: [customShirtSchema]
});

mongoose.model('Order', orderSchema);
