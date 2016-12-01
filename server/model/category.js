var mongoose = require('mongoose');
var Schema = mongoose.Schema;  

var catSchema = new Schema({ 
    name: {
    	type: String,
    	require: "name required"        
    } 
});

var Category = mongoose.model('Category', catSchema);
//
// var catlife = new Category({
// 	name: 'Life style' 
// });
// catlife.save(function (err, cat) {
//   if (err) {
//   	console.log(err);
// 	} else  {
// 		console.log(cat);
// 	}
// });
// catlife = new Category({
// 	name: 'Music' 
// });
// catlife.save(function (err, cat) {
//   if (err) {
//   	console.log(err);
// 	} else  {
// 		console.log(cat);
// 	}
// });
// catlife = new Category({
// 	name: 'Artist' 
// });
// catlife.save(function (err, cat) {
//   if (err) {
//   	console.log(err);
// 	} else  {
// 		console.log(cat);
// 	}
// }); 