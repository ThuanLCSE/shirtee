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
          console.log('ok');
          newState.signInSuccess = true;
          newState.admin = action.admin;
          return newState;
    case 'ADMIN_SIGN_UP_ERROR':
          return {
              text: 'Failed'
          };
    case 'ADMIN_UPLOAD_SUCCESSFULLY':


              newState.signInSuccess = true;
              newState.patternList = action.info;
              newState.message = action.message;
              return newState;

    case 'ADMIN_UPLOAD_ERROR':
       return {
          text: 'Upload Failed'

       };
    default:
      return state;
  }
}
