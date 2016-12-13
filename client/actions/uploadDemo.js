import restApi from "./../service/restAPI.js";

export function SignIn(userData) { 
    var data= {
        email: userData.email,
        password: userData.pwd
    };
    return function (dispatch) {
	  	return restApi.post(apiUser.UserSignIn, data).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'IMAGE_UPLOAD',
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