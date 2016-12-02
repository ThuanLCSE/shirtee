var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var levelSchema = new Schema({
	numberShirt : {
        type: Number,
        required: 'number shirt required'
      },
    expireTime: {
    	type: Number,
    	require: "expire time required"
    },
    detail: String
});

var Level = mongoose.model('Level', levelSchema);

// var levelOne = new Level({
// 	numberShirt : 15,
//     expireTime: 45,
//     detail: 'Good design'
// });
// levelOne.save(function (err, level) {
//   if (err) {
//   	console.log(err);
// 	} else  {
// 		console.log(level);
// 	}
// });
// levelOne = new Level({
// 	numberShirt : 0,
//     expireTime: 20,
//     detail: 'New comer'
// });
// levelOne.save(function (err, level) {
//   if (err) {
//   	console.log(err);
// 	} else  {
// 		console.log(level);
// 	}
// });
// levelOne = new Level({
// 	numberShirt : 30,
//     expireTime: 60,
//     detail: 'Advance design'
// });
// levelOne.save(function (err, level) {
//   if (err) {
//   	console.log(err);
// 	} else  {
// 		console.log(level);
// 	}
// });

// levelOne = new Level({
// 	numberShirt : 60,
//     expireTime: 90,
//     detail: 'Professional design'
// });
// levelOne.save(function (err, level) {
//   if (err) {
//   	console.log(err);
// 	} else  {
// 		console.log(level);
// 	}
// });
