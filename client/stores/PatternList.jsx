var defaultState = {
    listPatternAdmin: [],
    listPattern: [],
    pattern: {}
}

export default function PatternList(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'GET_LIST_PATTERN_BY_ADMIN_SUCCESS':
          console.log("get list");
          newState.listPatternAdmin = action.listPattern;
          return newState;
    case 'GET_LIST_PATTERN_BY_ADMIN_FAILED':
          return {
              text: 'Failed'
          };
    case 'GET_LIST_PATTERN_SUCCESS':
          newState.listPattern = action.listPattern;
          return newState;
    case 'GET_LIST_PATTERN_SALE_SUCCESS':
          newState.listPattern = action.listPattern;
          return newState;
    case 'GET_LIST_PATTERN_FAILED':
          return {
              text: 'Failed'
          };
    case 'APPROVE_PATTERN_SUCCESS':
          newState.pattern = action.pattern;
          return newState;
    case 'APPROVE_PATTERN_FAILED':
          return {
              text: 'Failed'
          };
    case 'DELETE_PATTERN_SUCCESS':
          return newState;
    case 'DELETE_PATTERN_FAILED':
          return {
              text: 'Failed'
          };
    default:
      return state;
  }
}