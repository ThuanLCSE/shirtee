import * as apiAdmin from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";



export function SignIn(adminData) {
    var data= {
        email: adminData.email,
        password: adminData.psw
    };
    return function (dispatch) {
	  	return restApi.post(apiAdmin.adminSignIn, data).then((response) => {
	    	console.log(response);
	       dispatch({
                      type: 'ADMIN_SIGN_IN_SUCCESSFULLY',
                      admin : response.admin,
                      message: 'sign in success hehe'
                   }
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'ADMIN_SIGN_IN_ERROR',
                    text: err.responseText,
                    message: 'co loi'
                    });
		});
	};
}

export function SignUp(adminData) {
    var data = {
        email: adminData.email,
        fullname: adminData.name,
        password: adminData.pwd
    };
    return function (dispatch) {
	  	return restApi.post(apiUser.adminSignOut, data).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'SIGN_UP_SUCCESSFULLY',
                     user : response.user}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'SIGN_UP_ERROR',
                    text: err.responseText
                    });
		});
	};
}
