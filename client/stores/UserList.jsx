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
          return newState;
    case 'SIGN_IN_ERROR':
          return {
              text: 'Failed'
          };
    case 'SIGN_UP_SUCCESSFULLY':
          console.log('ok');
          newState.signInSuccess = true;
          newState.user = action.user;
          return newState;
    case 'SIGN_UP_ERROR':
          return {
              text: 'Failed'
          };
    case 'BECOME_DESIGNER_SUCCESSFULLY':
//          newState.signInSuccess = true;
          newState.isDesigner = true;
          newState.designer = action.designer;
          return newState;
    case 'BECOME_DESIGNER_ERROR':
          return {
              text: 'Failed'
          };
    case 'IS_SIGNED_IN_YET':
          console.log("check sign in");
          newState.isDesigner = action.designer ? true : false;
          newState.signInSuccess = true;
          newState.user = action.user;
          return newState;
    case 'NOT_SIGNED_IN_YET':
          return {
              text: 'Failed'
          };
    case 'SIGN_OUT_SUCCESS':
          newState.signInSuccess = false;
          return {
              text: 'Success'
          };
    case 'SIGN_OUT_FAILED':
          return {
              text: 'Failed'
          };
    case 'UPDATE_SUCCESSFULLY':
          newState.user = action.user;
          return newState;
    case 'UPDATE_ERROR':
          return {
              text: 'Failed'
          };
    case 'UPLOAD_SHIRT_SUCCESSFULLY':
        return {
              text: action.info
        };
    default:
      return state;
          
  }
}
