export const hostServer = 'http://192.168.2.193:3013'
export const UserSignIn = hostServer + '/api/user/signIn'
export const UserSignUp = hostServer + '/api/user/signUp'
export const DesignerRegister = hostServer + '/api/designer/register'
// send data = {
// 	   displayName : 'require',
//     bankAccount: {
//     	name: String,
//         number: String
//     }
// }
export const uploadFileUrl = hostServer + '/api/upload'
export const uploadPattern = hostServer + '/api/designer/pattern/create/'//:designerId'
// send data = {
//     	url: 'require',
// 	    price: 'require',
//     	category: 'array of categoryId ex: [id1,id2]',
//     	position : {x: numeber, y: number},
// size: number,
// recommendPreviewUrl: string
// rotate: number,
// recommendShirtUrl : string
// recommendShirtId: id of shirt
//     	name: 'require'
// 	}
export const getListCategory = hostServer + '/api/category/listAll'
//http method : get
export const getListShirt = hostServer + '/api/shirt/listAll'
// http method : get
export const removeShirt = hostServer + '/api/shirt/remove'
// http method : post
// send data = {
// 	shirtId: 'id'
// }
export const uploadShirt = hostServer + '/api/shirt/create'
// send data = {
//     	gender : 'require',
//    		url: 'picture url',
//     	detail: 'require',
// 	    layoutUrl: 'layout Url',
//     	price: 'number',
//     	colorCode: array color code
// 	}
export const viewUserInfo = hostServer + 'api/user/info'
// http method : get

export const checkUserSignIn = hostServer + 'api/user/checkSignin'
//http method: get
// success: {
// 			user: object,
// 	  		designer: 'neu nhu la designer',
// 	  		message: "...",
// 	  	}
export const userSignOut = hostServer + '/api/user/signOut'
//http method: get
export const adminSignOut = hostServer + '/api/admin/signOut'
//http method: get
export const adminSignIn = hostServer + '/api/admin/signIn'
// send data = {
// 	   email : 'require',
//     password: 'require'
// }
// success :{
// 			admin: object,
// 	  		message: "...",
// 	  	}
export const adminApprovePattern = hostServer + '/api/pattern/approve/'//:patternId'
// http method get
// success :{
// 	message: 'update success',
// 	pattern: object
// }
export const adminDeletePattern = hostServer + '/api/pattern/remove/'//:patternId'
// http method get
// success :{
// 	message: 'remove pattern success'
// }
export const getListPattern = hostServer + '/api/user/pattern/listAll'
// http method get
export const getListPatternBestSell = hostServer + '/api/user/pattern/listAll/bestSell'
// http method get
// return {
	  	// 	listPattern : [],
	  	// 	message : 'get all best sell success',
	  	// }
export const getListPatternNewest = hostServer + '/api/user/pattern/listAll/newest'
// http method get
// return {
	  	// 	listPattern : [],
	  	// 	message : 'get all newest success',
	  	// }
export const getListPatternSale = hostServer + '/api/user/pattern/listAll/getAllSale'
// http method get
// return {
// 	listPattern : [],
// 	saleProgramme: sale,
// 	message : 'get all sale success',
// }

export const adminGetListPattern = hostServer + '/api/admin/pattern/listAll'
// http method get
export const userUpdateInfo = hostServer + '/api/user/update/'//userId
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
export const adminCreateSale = hostServer + '/api/sale/create/'
//http method: post
// {
//     	percentage : number (<100),
//    		detail: string,
//     	patternSale: array of pattern Id,
// 	    endDay: date,
//     	startDay: date
// 	}
export const adminViewAllSale = hostServer + '/api/sale/getAll/'
//http method: get
export const adminRemoveSale = hostServer + '/api/sale/remove/'
//http method: post
// {
// 	saleId : id
// }

export const userVotePattern = hostServer + '/api/pattern/voting/:patternId'//:patternId'
// http method post
// data send = {
// 	vote: number (1->5 )
// }
// success :{
// 	message: 'update success',
// 	pattern: object
// }
export const getLevelInfo = hostServer + '/api/designer/level/'//:designerId'
//http get
export const getPatternInfo = hostServer + '/api/pattern/info/:patternId'
//http get

