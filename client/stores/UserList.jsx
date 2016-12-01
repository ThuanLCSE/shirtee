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
    case 'BECOME_DESIGNER':
          return {
              text: 'Becomeeeee'
          };
    default:
      return {
          text: 'SignIn/SignUp'
      }
  }
}
