import * as apiUser from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";
import * as actType from '../constant/ActionTypes';

// get list in shirt action
export function GetList() {
    return function (dispatch) {
	  	return restApi.get(apiUser.getListShirt).then((response) => {

	       dispatch({ type: actType.getListShirtSuccess,
                     listShirt : response.listShirt,
                     message: 'successful get list shirt'
                   }
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: actType.getListShirtFail,
                    message: err.responseText
                  });
		});
	};
}

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
           dispatch({ type: actType.adminUpShirtSuccess,
                      message: 'succuess upload',
                       shirt : response.shirt}
                     );
        }).catch((err) => {
          console.log(err);
            dispatch({ type: actType.adminUpShirtFail,
                      message: err.responseText
                      });
      });
    }
}

export function removeShirt(shirt) {
  var data = {
       shirtId: shirt._id
      };
    return function (dispatch) {
       return restApi.post(apiUser.removeShirt,data).then((response) => {

               dispatch({
                          type: actType.removeShirtSuccess,
                          shirtId: shirt._id,
                          message: 'successful remove shirt'
                         }
                         );
            }).catch((err) => {
              console.log(err);
                dispatch({
                          type: actType.removeShirtFail,
                          message: err.responseText
                        });
          });
    };
}


export function selectCurrentShirt(index) { 
      
       return  {  type: actType.selectCurrentShirt,
                  index: index,
               } 
}
export function selectCurrentColor(colorCode) { 
   return  {  type: actType.selectCurrentColor,
                  colorCode: colorCode,
           } 
}

