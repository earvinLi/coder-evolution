// Internal Dependencies
import {
  createReducer,
  getAPICallingReducerHandlers,
} from '../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  SAVE_ARTICLE_TEXT,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  articleSavedTime: 0,
  fetchedArticleText: '# Week One',
  fetchError: '',
  isFetching: true,
};

const fetchArticleTextFail = (state, action) => ({ ...state, fetchError: action.error });
const fetchArticleTextRequest = (state) => ({ ...state, isFetching: true });
const fetchArticleTextSucceed = (state, action) => ({
  ...state,
  fetchedArticleText: action.response.articleText,
  isFetching: false,
});

const saveArticleText = (state, action) => ({
  ...state,
  articleSavedTime: action.articleSavedTime,
});

export default createReducer(INITIAL_STATE, {
  ...getAPICallingReducerHandlers(getAPICallingActionTypes('FETCH', 'ARTICLE_TEXT'), [
    fetchArticleTextFail,
    fetchArticleTextRequest,
    fetchArticleTextSucceed,
  ]),
  [SAVE_ARTICLE_TEXT]: saveArticleText,
});
