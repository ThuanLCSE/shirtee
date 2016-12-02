import * as apiUser from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";

export function GetList() {
    return function (dispatch) {
	  	return restApi.get(apiUser.getListCategory).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'GET_LIST_CATEGORY_SUCCESS',
                     listCategory : response.listCategory}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'GET_LIST_CATEGORY_FAILED',
                    text: err.responseText
                    });
		});
	};
}