// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import ArticleListsReducer from './ArticleListsReducer';
import ArticlesReducer from './ArticlesReducer';

export default combineReducers({
  ArticleLists: ArticleListsReducer,
  Articles: ArticlesReducer,
});
