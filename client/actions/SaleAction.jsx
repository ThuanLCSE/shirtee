import * as api from './../constant/ApiUri';
import restApi from "./../service/restAPI.js";
import * as actType from '../constant/ActionTypes';

export function CreateSale(sale) {
    var data = {
        percentage: sale.percentage, 
        detail: sale.detail,
     	patternSale: sale.pattern,
 	    endDay: sale.endDay,
     	startDay: sale.startDay
    };
    return function (dispatch) {
	  	return restApi.post(api.adminCreateSale, data).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'CREATE_SALE_SUCCESSFULLY',
                     sale : response.sale,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'CREATE_SALE_ERROR',
                    text: err.responseText
                    });
		});
	};
}

export function GetSale() {
    return function (dispatch) {
	  	return restApi.get(api.adminViewAllSale).then((response) => {
	    	console.log(response);
	       dispatch({ type: 'GET_SALE_SUCCESSFULLY',
                     listSale : response.listSale,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: 'GET_SALE_ERROR',
                    text: err.responseText
                    });
		});
	};
}

export function RemoveSale() {
    return function (dispatch) {
        return restApi.get(api.adminRemoveSale).then((response) => {
            console.log(response);
           dispatch({ type: actType.removeSaleSuccess,
                     listSale : response.listSale,
                    message: response.message}
                   );
        }).catch((err) => {
            console.log(err);
            dispatch({ type: actType.removeSaleFail,
                    text: err.responseText
                    });
        });
    };
}
