var defaultState = {
  pattern: {}
}

export default function DesignerList(state = defaultState, action) {
    var newState = Object.assign({}, state);
  switch (action.type) {
    case 'UPLOAD_PATTERN_SUCCESSFULLY':
          newState.pattern = action.pattern;
          return newState;
    case 'UPLOAD_PATTERN_ERROR':
          return newState;
          
    default:
      return state;
  }
}
