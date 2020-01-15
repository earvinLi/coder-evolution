// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import ArticleReducer from '../Article/reducers';
import AuthReducer from '../Auth/reducers';
import UIReducer from '../UI/UIReducer';

export default combineReducers({
  Account: AuthReducer,
  Article: ArticleReducer,
  UI: UIReducer,
});
