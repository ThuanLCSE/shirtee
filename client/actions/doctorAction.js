import * as types from '../constant/ActionTypes';
import * as apiUri from '../constant/ApiUri';
import restApi from "../service/restAPI.js";

export const signIn = function(data){ 
	console.log('action doctor call');
	return function (dispatch) {
	  	return restApi.post(apiUri.DtSignIn, data).then((response) => {
	    	//console.log(response);
	       dispatch({	
		  			type: types.SIGN_IN,
		       		error: 'login success',
			       	doctor: response
			    });
	    }).catch((err) => {   
	    	console.log(err);
	        dispatch({
	        		type: types.SIGN_IN,
		       		error: err.responseText
			    });
		});
	}; 
} 

export const checkAuth = function(){ 
	console.log('action call');
	return function (dispatch) {
	  	return restApi.get(apiUri.DtCheckAuth).then((response) => {
	    	console.log(response);
	       dispatch({	
		  			type: types.CHECK_AUTH,
		       		error: 'login success',
			       	response: response
			    });
	    }).catch((err) => {   
	        dispatch({
	        		type: types.CHECK_AUTH,
		       		error: err.responseText
			    });
		});
	}; 
} 
export const signOut = function(){ 
	console.log('action call');
	return function (dispatch) {
	  	return restApi.get(apiUri.DtSignOut).then((response) => { 
	       dispatch({	
		  			type: types.SIGN_OUT,
		       		error: 'log out success'
			    });
	    }).catch((err) => {   
	        dispatch({
	        		type: types.SIGN_OUT,
		       		error: err.responseText
			    });
		});
	}; 
}