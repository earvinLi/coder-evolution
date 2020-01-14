// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FETCH_ARTICLE_TEXT_REQUEST,
  FETCH_ARTICLE_TEXT_SUCCEED,
  SAVE_ARTICLE_TEXT,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  articleSavedTime: 0,
  fetchedArticleText: '# Week One',
  isFetching: true,
};

const fetchArticleTextRequest = (state) => ({ ...state, isFetching: true });

const fetchArticleTextSuccess = (state, action) => ({
  ...state,
  fetchedArticleText: action.articleText,
  isFetching: false,
});

const saveArticleText = (state, action) => ({
  ...state,
  articleSavedTime: action.articleSavedTime,
});

export default createReducer(INITIAL_STATE, {
  [FETCH_ARTICLE_TEXT_REQUEST]: fetchArticleTextRequest,
  [FETCH_ARTICLE_TEXT_SUCCEED]: fetchArticleTextSuccess,
  [SAVE_ARTICLE_TEXT]: saveArticleText,
});
