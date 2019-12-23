// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import SidebarUIReducer from './SidebarUI/reducers/SidebarUIReducer';

export default combineReducers({
  Sidebar: SidebarUIReducer,
});
