export const UserSignIn = '/api/user/signIn'
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