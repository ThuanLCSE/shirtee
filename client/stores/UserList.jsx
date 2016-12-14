var defaultState = {
    signInSuccess : false,
    isDesigner: false
}

export default function UserTodo(state = defaultState, action) {
    var newState = Object.assign({}, state);
  switch (action.type) {
    case 'SIGN_IN_SUCCESSFULLY':
          newState.isDesigner = action.designer ? true : false;
          newState.signInSuccess = true;
          newState.user = action.user;
          newState.designer = action.designer;
          return newState;
    case 'SIGN_IN_ERROR':
          return newState;
          
    case 'SIGN_UP_SUCCESSFULLY':
          newState.message = action.message;
          if (newState.message === "email already exist")
              return newState;
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
    case 'VIEW_INFO_SUCCESSFULLY':
          newState.user = action.user;
          return newState;
    case 'VIEW_INFO_ERROR':
           return newState;
     
    default:
      return state;
          
  }
}
