import * as apiUser from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";
import * as actType from '../constant/ActionTypes';

export function UploadPattern(patternData) {
    var data= {
        url: patternData.url,
 	    price: patternData.detail.price,
     	category: patternData.category,
        position: {
            x: patternData.recommend.x,
            y: patternData.recommend.y,
        },
        size: patternData.recommend.scale,
        rotate: patternData.recommend.rotate,
     	name: patternData.detail.name,
 	    recommendShirtUrl: patternData.recommendShirtUrl,
        recommendShirtId: patternData.recommendShirtId,
        recommendPreviewUrl: patternData.recommend.previewUrl,
        colorCode: patternData.colorCode
    };
    var validateMessage = '';
    validateMessage = data.category.length > 0?'':'Please choose category for your design'
    validateMessage = data.name?'':'Please enter the name for your design'
    if (validateMessage){
          return  {  
                type: actType.validateBeforCreateFaile,
                message: validateMessage
           } 
       } else{
        return function (dispatch) {
            var UploadPattern = apiUser.uploadPattern + patternData.designerId;
            return restApi.post(UploadPattern, data).then((response) => {
                console.log(response);
               dispatch({ type: 'UPLOAD_PATTERN_SUCCESSFULLY',
                         pattern: response.pattern}
                       );
            }).catch((err) => {
                console.log(err);
                dispatch({ type: 'UPLOAD_PATTERN_ERROR',
                        message: err.responseText
                        });
            });
        };

       }
  
    
}
export function GetLevelInfo(designerId) {
     
    return function (dispatch) {
        var UploadPattern = apiUser.getLevelInfo + designerId;
        return restApi.get(UploadPattern).then((response) => {
            console.log(response);
           dispatch({ type: actType.getLevelSuccess,
                     level: response.level}
                   );
        }).catch((err) => {
            console.log(err);
            dispatch({ type: actType.getLevelFail,
                        message: err.responseText
                    });
        });
    };
}
export function removeMessage(index) { 
      
       return  {  
                    type: actType.removeMessagePattern
               } 
}