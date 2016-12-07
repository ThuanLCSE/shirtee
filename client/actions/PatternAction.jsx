import * as apiUser from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";

export function GetList() {
    return function (dispatch) {
	  	return restApi.get(apiUser.getListPattern).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'GET_LIST_PATTERN_SUCCESS',
                     listPattern : response.listPattern}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'GET_LIST_PATTERN_FAILED',
                    text: err.responseText
                    });
		});
	};
}