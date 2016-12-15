var defaultState = {
    listPatternAdmin: [],
    listPattern: [],
    listPatternBestSale: [],
    listPatternNewest: [],
    pattern: {}
}

export default function PatternList(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'GET_LIST_PATTERN_BY_ADMIN_SUCCESS':
          newState.listPatternAdmin = action.listPattern;
          return newState;
    case 'GET_LIST_PATTERN_BY_ADMIN_FAILED':
           return newState;
    case 'GET_LIST_PATTERN_SUCCESS':
          newState.listPattern = action.listPattern;
          return newState;
    case 'GET_LIST_PATTERN_BESTSELL_SUCCESS':
          newState.listPatternBestSale = action.listPattern;
          return newState;
    case 'GET_LIST_PATTERN_NEWEST_SUCCESS':
          newState.listPatternNewest = action.listPattern;
          return newState;
    case 'GET_LIST_PATTERN_FAILED':
           return newState;
    case 'APPROVE_PATTERN_SUCCESS':
          newState.pattern = action.pattern;
          return newState;
    case 'APPROVE_PATTERN_FAILED':
          return newState;
    default:
      return state;
  }
}