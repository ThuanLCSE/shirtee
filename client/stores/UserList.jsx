var defaultState = {
    signInSuccess : false,
    isDesigner: false
}

export default function UserTodo(state = defaultState, action) {
    var newState = Object.assign({},defaultState);
  switch (action.type) {
    case 'SIGN_IN_SUCCESSFULLY':
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
          newState.signInSuccess = true;
          newState.isDesigner = true;
          newState.user = action.user;
          return newState;
      case 'BECOME_DESIGNER_ERROR':
          return {
              text: 'Failed'
          };
    case 'UPLOAD_SHIRT_SUCCESSFULLY':
        return {
              text: action.info
        };
    default:
      return defaultState;
  }
}
