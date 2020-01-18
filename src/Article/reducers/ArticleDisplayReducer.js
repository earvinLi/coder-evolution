// Internal Dependencies
import {
  createReducer,
  getAPICallingReducerHandlers,
} from '../../App/RootUtilities';
import { getAPICallingActionTypes } from '../../App/ActionTypes';

const INITIAL_STATE = {
  articleSavedTime: 0,
  fetchedArticleText: '',
  fetchError: '',
  isFetching: true,
};

const fetchArticleTextFail = (state, action) => ({ ...state, fetchError: action.error });
const fetchArticleTextRequest = (state) => ({ ...state, isFetching: true });
const fetchArticleTextSucceed = (state, action) => ({
  ...state,
  fetchedArticleText: action.response.ArticleText,
  isFetching: false,
});

export default createReducer(INITIAL_STATE, {
  ...getAPICallingReducerHandlers(getAPICallingActionTypes('fetchArticle'), [
    fetchArticleTextFail,
    fetchArticleTextRequest,
    fetchArticleTextSucceed,
  ]),
});
