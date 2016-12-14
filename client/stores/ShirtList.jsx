import * as actType from '../constant/ActionTypes'; 
var defaultState = { 
    message: '',
    listShirt: []
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
        newState.message = action.message;
        return newState;
    case actType.getListShirtFail:
         newState.message = action.message;
        return newState;

    case actType.removeShirtSuccess:
        newState.listShirt = [];
        for  (var shirt in state.listShirt){
          if (shirt._id !== action.shirtId)
            newState.listShirt.push(shirt);
        }
        newState.message = action.message;
        return newState;
    case actType.removeShirtFail:
         newState.message = action.message;
        return newState;

    default:
      return state;
  }
}