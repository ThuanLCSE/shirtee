var defaultState = {
    listCategory: []
}

export default function CategoryList(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'GET_LIST_CATEGORY_SUCCESS':
          console.log("get list");
          newState.listCategory = action.listCategory;
          return newState;
    case 'GET_LIST_CATEGORY_FAILED':
          return newState;
    default:
      return state;
  }
}