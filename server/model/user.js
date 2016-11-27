var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name : {
        type: String,
        trim: true,
        default: '',
        required: 'Name required'
      },
	phone : {
        type: String,
        trim: true,
        default: '',
        required: 'Phone number required'
      },
	address : String,
	IP : {
	    type: String,
	    default: '',
	    trim: true,
	    required: 'IP required'
	  },
	bookingNumber: Number,
	create: {
	    type: Date,
	    default: Date.now
	  }
});

mongoose.model('User', userSchema);
