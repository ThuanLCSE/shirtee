import * as actType from '../constant/ActionTypes'; 
var defaultState = {
    signInSuccess : false, 
    message: '',
    patternList: [],
    listShirt: [] 
}


export default function AdminTodo(state = defaultState, action) {
    var newState = Object.assign({},state);
  switch (action.type) {
    case 'ADMIN_SIGN_IN_SUCCESSFULLY':
          newState.signInSuccess = true;
          newState.admin = action.admin;
          newState.message = action.message;
          return newState;
    case 'ADMIN_SIGN_IN_ERROR':
          newState.message = action.message;
          return newState;
    case 'ADMIN_SIGN_UP_SUCCESSFULLY':
          console.log('ok');
          newState.signInSuccess = true;
          newState.admin = action.admin;
          return newState;
    case 'ADMIN_SIGN_UP_ERROR':
          return {
              text: 'Failed'
          };
    case actType.adminUpShirtSuccess: 
        newState.signInSuccess = true; 
        newState.message = action.message;
        return newState; 
    case actType.adminUpShirtFail:
      newState = action.message;
       return  newState;
    case 'GET_PATTERN_LIST_SUCCESS': 
      newState.patternList = action.patternList;
      newState.message = action.message;
      return newState;
   
    default: 
      return state;
  }
}
