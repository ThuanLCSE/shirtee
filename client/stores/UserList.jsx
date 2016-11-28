export default function UserTodo(state, action) {
  switch (action.type) {
    case 'SIGN_IN_SUCCESSFULLY':
          return {
              text: action.user.email
          };
    default:
      return {
          text: 'SignIn/SignUp'
      }
  }
}