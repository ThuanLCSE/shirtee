export const UserSignIn = '/api/user/signIn' //ông nội cho sign in mà k quăng cho check designer
export const UserSignUp = '/api/user/signUp'
export const DesignerRegister = '/api/designer/register'
// send data = {
// 	   displayName : 'require',
//     bankAccount: {
//     	name: String,
//         number: String
//     }
// }
export const uploadFileUrl = '/api/upload'
export const uploadPattern = '/api/designer/pattern/create/:designerId'
// send data = {
//     	url: 'require',
// 	    designer: 'displayname of designer',
// 	    price: 'require',
//     	catergory: 'array of categoryId ex: [id1,id2]',
//     	recommendShirt: "shirt Id",
// 	    recommendPattern: {
// 	    	position: {x:'number',y:'number'},
// 	    	size: 'number',
// 	    	rotate: 'number'
// 	    },
//     	name: 'require',
// 	    recommendUrl: 'shirtUrl',
// 	}
export const getListCategory = '/api/category/listAll'
//http method : get
export const getListShirt = '/api/shirt/listAll'
// http method : get
export const uploadShirt = '/api/shirt/create'
// send data = {
//     	gender : 'require',
//    		url: 'picture url',
//     	detail: 'require',
// 	    layoutUrl: 'layout Url',
//     	price: 'number',
//     	colorCode: 'color code'
// 	}
export const viewUserInfo = 'api/user/info'
// http method : get

export const checkUserSignIn = 'api/user/checkSignin' //ông nội check sign in mà k quăng cho name
//http method: get
// success: {
// 			user: object,
// 	  		designer: 'neu nhu la designer',
// 	  		message: "...",
// 	  	}
export const userSignOut = '/api/user/signOut'
//http method: get
export const adminSignOut = '/api/admin/signOut'
//http method: get
export const adminSignIn = '/api/admin/signIn'

// send data = {
// 	   email : 'require',
//     password: 'require'
// }
// success :{
// 			admin: object,
// 	  		message: "...",
// 	  	}
export const adminApprovePattern = '/api/pattern/approve/:patternId'
// http method get
// success :{
// 	message: 'update status success',
// 	pattern: object
// }
export const adminDeletePattern = '/api/pattern/remove/:patternId'
// http method get
// success :{
// 	message: 'remove pattern success'
// }
export const getListPattern = '/api/pattern/listAll'

export const userUpdateInfo = '/api/user/update/:userId'
// send data = {
// 	   fullname
	// password
	// gender
	// birthday   
// }
// success :{
// 			message: 'update user success',
	  		// user: Object,
// 	  	}

