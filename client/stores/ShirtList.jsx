import * as actType from '../constant/ActionTypes'; 
var defaultState = { 
    message: '',
    listShirt: []
}

export default function PatternList(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case actType.getListShirtSuccess:
        newState.listShirt = action.listShirt;
        newState.message = action.message;
        return newState;
    case actType.getListShirtFail:
         newState.message = action.message;
        return newState;

    default:
      return state;
  }
}