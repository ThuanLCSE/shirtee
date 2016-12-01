import * as apiUser from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";

export function SignIn(userData) { 
    var data= {
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
	        dispatch({ type: 'SIGN_IN_ERROR',
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
	        dispatch({ type: 'SIGN_UP_ERROR',
                    text: err.responseText
                    });
		});
	};
}

export function BecomeNewDesigner(designerData) { 
    var data= {
        displayName : designerData.displayName, 
        bankAccount: {
            name: designerData.name,
            number: designerData.number
        }
    };
    return function (dispatch) {
	  	return restApi.post(apiUser.DesignerRegister, data).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'BECOME_DESIGNER_SUCCESSFULLY',
                     designer : response.designer}
                   );
	    }).catch((err) => {   
	    	console.log(err);
	        dispatch({ type: 'BECOME_DESIGNER_ERROR',
                    text: err.responseText
                    });
		});
	};
}