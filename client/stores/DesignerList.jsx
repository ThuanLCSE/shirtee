
import * as actType from '../constant/ActionTypes';
var defaultState = {
  message: '',
  pattern: {},
  level: {}
}

export default function DesignerList(state = defaultState, action) {
    var newState = Object.assign({}, state);
  switch (action.type) {
    case 'UPLOAD_PATTERN_SUCCESSFULLY':
          newState.pattern = action.pattern;
          newState.message = 'Create new design success! Thank you';
          return newState;
    case 'UPLOAD_PATTERN_ERROR':
          return newState;
     case actType.removeMessagePattern: 
        newState.message = ''; 
        newState.pattern = {};
        return newState; 
     case actType.validateBeforCreateFaile: 
        newState.message = action.message; 
        return newState;  
    case actType.getLevelSuccess:
          newState.level = action.level;
          return newState;
    case actType.getLevelFail:
          newState.message = action.message;
          return newState;
    
    default:
      return state;
  }
}
