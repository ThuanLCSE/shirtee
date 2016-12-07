var defaultState = {
    listPattern: []
}

export default function PatternList(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'GET_LIST_PATTERN_SUCCESS':
          console.log("get list");
          newState.listPattern = action.listPattern;
          return newState;
    case 'GET_LIST_PATTERN_FAILED':
          return {
              text: 'Failed'
          };
    default:
      return state;
  }
}