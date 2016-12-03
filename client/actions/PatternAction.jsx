import * as apiUri from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";

export function GetList() {
    return function (dispatch) {
	  	return restApi.get(apiUri.getListPattern).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'GET_LIST_CATEGORY_SUCCESS',
                     patternList: response.listPattern,
                     message : response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({
                  type: 'GET_LIST_CATEGORY_FAILED',
                  message : response.message,
                    text: err.responseText
                    });
		});
	};
}
