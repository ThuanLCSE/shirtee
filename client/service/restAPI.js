let $ = require('jquery');

module.exports = {
	get(url){
		return new Promise(function(success,error){
			$.ajax({
				url:url,
				dataType:"json",
				xhrFields: {
	                withCredentials: true
	            },
	            crossDomain: true,
				success,
				error
			});
		});
	},
	del(url){
		return new Promise(function(success,error){
			$.ajax({
				url:url,
				type:'DELETE',
				xhrFields: {
	                withCredentials: true
	            },
	            crossDomain: true,
				success,
				error
			})
		})
	},
	post(url,data){
		return new Promise(function(success,error){
			$.ajax({
				url,
				type:'POST',
				xhrFields: {
	                withCredentials: true
	            },
	            crossDomain: true,
				data,
				success,
				error
			})
		})
	},
	put(url,data){
		return new Promise(function(success,error){
			$.ajax({
				url,
				type:'PUT',
				xhrFields: {
	                withCredentials: true
	            },
	            crossDomain: true,
				data,
				success,
				error
			})
		})
	}
}
