import * as actType from '../constant/ActionTypes';
var defaultState = {
    message: '',
    listShirt: [],
    currentSelect: -1,
    currentColor: ''
}

export default function PatternList(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {

    case actType.adminUpShirtSuccess:
        newState.message = action.message;
        return newState;
    case actType.adminUpShirtFail:
      newState.message = action.message;
       return  newState;

    case actType.getListShirtSuccess:
        newState.listShirt = action.listShirt;
        newState.currentSelect = 0;
        newState.currentColor = action.listShirt[0].colorCode[0];
        newState.message = action.message;
        return newState;
    case actType.getListShirtFail:
         newState.message = action.message;
        return newState;

    case actType.removeShirtSuccess:
        newState.listShirt = [];
        // alert("Remove " + shirt._id + " successful!!! ");
        for  (var shirt in state.listShirt){
          if (shirt._id !== action.shirtId)
            newState.listShirt.push(shirt);
        }
        newState.message = action.message;
        return newState;
    case actType.removeShirtFail:
         newState.message = action.message;
        return newState;

    case actType.selectCurrentShirt:
         newState.currentSelect = action.index; 
        newState.currentColor = newState.listShirt[action.index].colorCode[0];
        return newState;
     case actType.selectCurrentColor: 
        newState.currentColor = action.colorCode; 
        return newState; 
   
    default:
      return state;
  }
}
