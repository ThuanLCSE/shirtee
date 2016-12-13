import * as apiUser from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";

// get list in shirt action
export function GetList() {
    return function (dispatch) {
	  	return restApi.get(apiUser.getListShirt).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'GET_SHIRT_LIST_SUCCESS',
                     listShirt : response.listShirt,
                     message: 'successful get list shirt'
                   }
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'GET_SHIRT_LIST_FAILED',
                    text: err.responseText
                  });
		});
	};
}

export function DelShirt() {
    return function (dispatch) {
      // get ... uri delete item
    };
}
