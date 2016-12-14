var defaultState = {
    signInSuccess : false,
    isDesigner: false
}

export default function UserTodo(state = defaultState, action) {
    var newState = Object.assign({}, state);
  switch (action.type) {
    case 'SIGN_IN_SUCCESSFULLY':
          console.log("Sign in");
          newState.isDesigner = action.designer ? true : false;
          newState.signInSuccess = true;
          newState.user = action.user;
          newState.designer = action.designer;
          return newState;
    case 'SIGN_IN_ERROR':
          return newState;
          
    case 'SIGN_UP_SUCCESSFULLY':
          console.log('ok');
          newState.signInSuccess = true;
          newState.user = action.user;
          return newState;
    case 'SIGN_UP_ERROR':
           return newState;

    case 'BECOME_DESIGNER_SUCCESSFULLY':
//          newState.signInSuccess = true;
          newState.isDesigner = true;
          newState.designer = action.designer;
          return newState;
    case 'BECOME_DESIGNER_ERROR':
           return newState;

    case 'IS_SIGNED_IN_YET':
          console.log("check sign in");
          newState.isDesigner = action.designer ? true : false;
          newState.signInSuccess = true;
          newState.user = action.user;
          newState.designer = action.designer;
          return newState;
    case 'NOT_SIGNED_IN_YET':
           return newState;

    case 'SIGN_OUT_SUCCESS':
          newState.signInSuccess = false;
          return newState; 

    case 'SIGN_OUT_FAILED':
           return newState;
    case 'UPDATE_SUCCESSFULLY':
          newState.user = action.user;
          return newState;
    case 'UPDATE_ERROR':
           return newState;
     
    default:
      return state;
          
  }
}
