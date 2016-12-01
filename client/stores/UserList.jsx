export default function UserTodo(state, action) {
  switch (action.type) {
    case 'SIGN_IN_SUCCESSFULLY':
          return {
              text: action.user.email
          };
    case 'SIGN_UP_SUCCESSFULLY':
          return {
              text: action.user.name
          };
    case 'ADMIN_UPLOAD_SUCCESSFULLY':
      return {
          text: action.user.name
      };
    default:
      return {
          text: 'SignIn/SignUp'
      }
  }
}
