// Internal Dependencies
import {
  createReducer,
  getAPICallingReducerHandlers,
} from '../../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  OPEN_ARTICLE_DISPLAY,
} from '../../../App/ActionTypes';

const INITIAL_STATE = {
  currentArticle: 'javascript-foundations',
  fetchError: '',
  isFetching: false,
  fetchedArticles: {},
};

const fetchArticlesFail = (state, action) => ({ ...state, fetchError: action.error });
const fetchArticlesRequest = (state) => ({ ...state, isFetching: true });
const fetchArticlesSucceed = (state, action) => {
  const fetchedArticlesToUpdate = { ...state.fetchedArticles };
  fetchedArticlesToUpdate[action.articleList] = action.response;

  return {
    ...state,
    fetchedArticles: fetchedArticlesToUpdate,
    isFetching: false,
  };
};

const openArticleDisplay = (state, action) => ({
  ...state,
  currentArticle: action.articleName,
});

export default createReducer(INITIAL_STATE, {
  ...getAPICallingReducerHandlers(getAPICallingActionTypes('FETCH', 'ARTICLES'), [
    fetchArticlesFail,
    fetchArticlesRequest,
    fetchArticlesSucceed,
  ]),
  [OPEN_ARTICLE_DISPLAY]: openArticleDisplay,
});
