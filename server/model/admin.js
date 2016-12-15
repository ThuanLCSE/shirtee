var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var adminSchema = new Schema({ 
    password :{
    	type: String,
    	required: 'Password required'
    },
    email: {
    	type: String,
    	required: 'email required'
    }, 
    createdDay: {
    	type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
});


var Admin = mongoose.model('Admin', adminSchema);


// var admin = new Admin({
//  email: 'abc@123',
//  password: '123'
// });
// admin.save(function (err, admin) {
//   if (err) {
//      console.log(err);
//  } else  {
//      console.log(admin);
//  }
// });