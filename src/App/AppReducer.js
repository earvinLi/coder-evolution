// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import ArticleReducer from '../ArticleDisplay/reducers';
import UIReducer from '../UI/UIReducer';

export default combineReducers({
  Article: ArticleReducer,
  UI: UIReducer,
});
