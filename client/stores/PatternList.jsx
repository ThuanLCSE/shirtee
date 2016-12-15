var defaultState = {
    listPatternAdmin: [],
    listPattern: [],
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
    case 'GET_LIST_PATTERN_FAILED':
           return newState;
    case 'APPROVE_PATTERN_SUCCESS':
          newState.listPatternAdmin = [];
          for (var i in state.listPatternAdmin){
            if (state.listPatternAdmin[i]._id === action.patternId){
                state.listPatternAdmin[i].status = "approve"
            }
            newState.listPatternAdmin.push(state.listPatternAdmin[i]);
          }
          
          return newState;
    case 'APPROVE_PATTERN_FAILED':
          return newState;
    default:
      return state;
  }
}