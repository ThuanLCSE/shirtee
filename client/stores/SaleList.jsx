var defaultState = {
    sale: {},
    listSale: {}
}

export default function SaleList(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'CREATE_SALE_SUCCESSFULLY':
          newState.sale = action.sale;
          return newState;
    case 'CREATE_SALE_ERROR':
          return {
              text: 'Failed'
          };
    case 'GET_SALE_SUCCESSFULLY':
          newState.listSale = action.listSale;
          return newState;
    case 'GET_SALE_ERROR':
          return {
              text: 'Failed'
          };
    default:
      return state;
  }
}