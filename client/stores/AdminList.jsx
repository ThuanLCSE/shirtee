var defaultState = {
    signInSuccess : false,
    message: '',
    patternList: []
    //isDesigner: false
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
        return {
              text: action.info

        };
    case 'ADMIN_UPLOAD_ERROR':
       return {
          text: 'Upload Failed'
       };
    case 'GET_PATTERN_LIST_SUCCESS':
      //newState.signInSuccess = true; //  why ? ??  hien ra sign up 
      newState.patternList = action.patternList;
      newState.message = action.message;
      return newState;
    default:
      return defaultState;
  }
}