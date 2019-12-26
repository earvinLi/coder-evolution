// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import ArticleReducer from '../Article/reducers';
import UIReducer from '../UI/UIReducer';

export default combineReducers({
  Article: ArticleReducer,
  UI: UIReducer,
});
