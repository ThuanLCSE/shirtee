import * as apiUser from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";

export function GetListByAdmin() {
    return function (dispatch) {
	  	return restApi.get(apiUser.adminGetListPattern).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'GET_LIST_PATTERN_BY_ADMIN_SUCCESS',
                     listPattern : response.listPattern}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'GET_LIST_PATTERN_BY_ADMIN_FAILED',
                    text: err.responseText
                    });
		});
	};
}

export function ApprovePattern(id) {
    return function (dispatch) {
        var adminApprovePattern = apiUser.adminApprovePattern + id;
	  	return restApi.get(adminApprovePattern).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'APPROVE_PATTERN_SUCCESS',
                     message : response.message,
                    pattern: response.pattern}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'APPROVE_PATTERN_FAILED',
                    text: err.responseText
                    });
		});
	};
}

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