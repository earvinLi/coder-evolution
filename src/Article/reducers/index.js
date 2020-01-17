// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import ArticleAddDialogReducer from './ArticleAddDialogReducer';
import ArticleDisplayReducer from './ArticleDisplayReducer';
import ArticleEditorReducer from './ArticleEditorReducer';

export default combineReducers({
  ArticleAddDialog: ArticleAddDialogReducer,
  ArticleDisplay: ArticleDisplayReducer,
  ArticleEditor: ArticleEditorReducer,
});
