import * as apiUser from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";

export function UploadPattern(patternData) {
    var data= {
        url: patternData.url,
 	    price: patternData.detail.price,
     	category: patternData.category,
        position: patternData.position,
        size: patternData.size,
        rotate: patternData.rotate,
     	name: patternData.detail.name,
 	    recommendShirtUrl: patternData.recommendShirtUrl,
        recommendShirtId: patternData.recommendShirtId
    };
    return function (dispatch) {
        var UploadPattern = apiUser.uploadPattern + patternData.designerId;
	  	return restApi.post(UploadPattern, data).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'UPLOAD_PATTERN_SUCCESSFULLY',
                     pattern: response.pattern}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'UPLOAD_PATTERN_ERROR',
                    text: err.responseText
                    });
		});
	};
}