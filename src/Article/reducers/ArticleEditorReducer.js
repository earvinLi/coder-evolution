// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  CLOSE_ARTICLE_EDITOR,
  OPEN_ARTICLE_EDITOR,
  UPDATE_ARTICLE_TEXT,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  articleText: '',
  isOpen: false,
};

const closeArticleEditor = () => INITIAL_STATE;

const openArticleEditor = (state, action) => ({
  articleText: action.articleText,
  isOpen: true,
});

const updateArticleText = (state, action) => ({
  ...state,
  articleText: action.articleText,
});

export default createReducer(INITIAL_STATE, {
  [CLOSE_ARTICLE_EDITOR]: closeArticleEditor,
  [OPEN_ARTICLE_EDITOR]: openArticleEditor,
  [UPDATE_ARTICLE_TEXT]: updateArticleText,
});
