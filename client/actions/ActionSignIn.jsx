export function SignIn(email, pwd) { 

    	console.log('sign up action')
    return { type: 'SIGN_IN_SUCCESSFULLY', user : {email: email,
                                                  pwd: pwd}}
}