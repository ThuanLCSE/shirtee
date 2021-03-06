import * as actType from '../constant/ActionTypes'; 
var defaultState = {
    signInSuccess : false, 
   
    message: '' 
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
          newState.signInSuccess = true;
          newState.admin = action.admin;
          return newState;
    case 'ADMIN_SIGN_UP_ERROR':
          return newState;
   
     
    case actType.adminUpShirtSuccess: 
        newState.signInSuccess = true; 
        newState.message = action.message;
        return newState; 
    case actType.adminUpShirtFail:
      newState = action.message;
       return  newState; 
   
    default: 
      return state;
  }
}
