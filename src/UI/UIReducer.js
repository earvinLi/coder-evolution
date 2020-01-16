// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import SidebarUIReducer from './SidebarUI/reducers';

export default combineReducers({
  Sidebar: SidebarUIReducer,
});
