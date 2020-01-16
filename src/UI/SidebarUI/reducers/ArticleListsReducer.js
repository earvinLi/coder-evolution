// Internal Dependencies
import {
  createReducer,
  getAPICallingReducerHandlers,
} from '../../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  OPEN_ARTICLE_DISPLAY,
  TOGGLE_WEEK_ITEM_LIST,
} from '../../../App/ActionTypes';

const INITIAL_STATE = {
  currentArticle: 'javascript-foundations',
  fetchedArticleLists: [],
  fetchError: '',
  isFetching: false,
  openedArticleLists: [],
};

const fetchArticleListsFail = (state, action) => ({ ...state, fetchError: action.error });
const fetchArticleListsRequest = (state) => ({ ...state, isFetching: true });
const fetchArticleListsSucceed = (state, action) => ({
  ...state,
  fetchedArticleLists: action.response,
  isFetching: false,
});

const openArticleDisplay = (state, action) => ({
  ...state,
  currentArticle: action.articleName,
});

const toggleWeekItemList = (state, action) => ({
  ...state,
  openedArticleLists: action.openedArticleLists,
});

export default createReducer(INITIAL_STATE, {
  ...getAPICallingReducerHandlers(getAPICallingActionTypes('FETCH', 'ARTICLE_LISTS'), [
    fetchArticleListsFail,
    fetchArticleListsRequest,
    fetchArticleListsSucceed,
  ]),
  [OPEN_ARTICLE_DISPLAY]: openArticleDisplay,
  [TOGGLE_WEEK_ITEM_LIST]: toggleWeekItemList,
});
