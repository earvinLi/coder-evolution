// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import UIReducer from '../UI/UIReducer';

export default combineReducers({
  UI: UIReducer,
});