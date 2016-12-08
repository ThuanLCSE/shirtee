import * as apiUser from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";


export function UpLoadShirt(uploadInfo) {
    var info = {
          	gender : uploadInfo.gender,
         		url: uploadInfo.url,
          	detail: uploadInfo.detail,
      	    layoutUrl: uploadInfo.layoutUrl,
          	price: uploadInfo.price,
          	colorCode: uploadInfo.colorCode
    };

      return function (dispatch) {
      	return restApi.post(apiUser.uploadShirt, info).then((response) => {
        	console.log(response);
           dispatch({ type: 'ADMIN_UPLOAD_SUCCESSFULLY',
                      text: 'Upload successful ahihi',
                      message: 'succuess upload',
                       info : response.info}
                     );
        }).catch((err) => {
        	console.log(err);
            dispatch({ type: 'ADMIN_UPLOAD_ERROR',
                      text: err.responseText
                      });
      });
    }




    // return function (dispatch) {
	  // 	return restApi.post(apiUser.UserSignIn, data).then((response) => {
	  //   	console.log(response);
	  //      dispatch({ type: 'SIGN_IN_SUCCESSFULLY',
    //                  user : response.user}
    //                );
	  //   }).catch((err) => {
	  //   	console.log(err);
	  //       dispatch({ type: 'SIGN_IN_ERROR',
    //                 text: err.responseText
    //                 });
		// });
};
