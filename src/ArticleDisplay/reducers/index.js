// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import ArticleDisplayReducer from './ArticleDisplayReducer';
import ArticleEditorReducer from './ArticleEditorReducer';

export default combineReducers({
  ArticleDisplay: ArticleDisplayReducer,
  ArticleEditor: ArticleEditorReducer,
});
