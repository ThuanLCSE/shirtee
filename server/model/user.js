var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name : {
        type: String,
        trim: true,
        default: '',
        required: 'Name required'
      }
});

mongoose.model('User', userSchema);
