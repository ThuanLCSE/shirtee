import * as apiAdmin from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";



export function SignIn(adminData) {
    var data= {
        email: adminData.email,
        password: adminData.password
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
 