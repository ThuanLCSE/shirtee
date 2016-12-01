import * as apiUser from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";

export function SignIn(userData) {
    var data = {
        email: userData.email,
        password: userData.pwd
    };
    return function (dispatch) {
	  	return restApi.post(apiUser.UserSignIn, data).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'SIGN_IN_SUCCESSFULLY',
                     user : response.user}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'SIGN_IN_SUCCESSFULLY',
                    text: err.responseText
                    });
		});
	};
}

export function SignUp(userData) {
    var data= {
        email: userData.email,
        fullname: userData.name,
        password: userData.pwd
    };
    return function (dispatch) {
	  	return restApi.post(apiUser.UserSignUp, data).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'SIGN_UP_SUCCESSFULLY',
                     user : response.user}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'SIGN_UP_SUCCESSFULLY',
                    text: err.responseText
                    });
		});
	};
}
