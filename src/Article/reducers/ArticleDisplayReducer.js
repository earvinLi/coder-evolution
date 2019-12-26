// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FETCH_ARTICLE_TEXT,
  SAVE_ARTICLE_TEXT,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  fetchedArticle: '# Week One',
  savedArticle: '',
};

const fetchArticleText = (state, action) => ({
  ...state,
  fetchedArticle: action.fetchedArticle,
});

const saveArticleText = (state, action) => ({
  ...state,
  savedArticle: action.currentArticle,
});

export default createReducer(INITIAL_STATE, {
  [FETCH_ARTICLE_TEXT]: fetchArticleText,
  [SAVE_ARTICLE_TEXT]: saveArticleText,
});
