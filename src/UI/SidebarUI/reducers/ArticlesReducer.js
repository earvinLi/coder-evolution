// Internal Dependencies
import {
  createReducer,
  getAPICallingReducerHandlers,
} from '../../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  OPEN_ARTICLE,
} from '../../../App/ActionTypes';

const INITIAL_STATE = {
  articleListUnderFetching: '',
  currentArticle: 'JavaScript Foundations',
  fetchError: '',
  fetchedArticles: {},
};

const fetchArticlesFail = (state, action) => ({ ...state, fetchError: action.error });
const fetchArticlesRequest = (state, action) => ({
  ...state,
  articleListUnderFetching: action.articleList,
});
const fetchArticlesSucceed = (state, action) => {
  const fetchedArticlesToUpdate = { ...state.fetchedArticles };
  fetchedArticlesToUpdate[action.articleList] = action.response;

  return {
    ...state,
    articleListUnderFetching: '',
    fetchedArticles: fetchedArticlesToUpdate,
  };
};

const openArticle = (state, action) => ({
  ...state,
  currentArticle: action.articleName,
});

export default createReducer(INITIAL_STATE, {
  ...getAPICallingReducerHandlers(getAPICallingActionTypes('fetchArticles'), [
    fetchArticlesFail,
    fetchArticlesRequest,
    fetchArticlesSucceed,
  ]),
  [OPEN_ARTICLE]: openArticle,
});
