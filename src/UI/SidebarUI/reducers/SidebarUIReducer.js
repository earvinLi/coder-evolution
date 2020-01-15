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
  weekItemListIsOpen: ['Week One'],
};

const fetchArticleListsFail = (state, action) => ({ ...state, fetchError: action.error });
const fetchArticleListsRequest = (state) => ({ ...state, isFetching: true });
const fetchArticleListsSuccess = (state, action) => ({
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
  weekItemListIsOpen: action.weekItemListIsOpen,
});

export default createReducer(INITIAL_STATE, {
  ...getAPICallingReducerHandlers(getAPICallingActionTypes('FETCH', 'ARTICLE_LISTS'), [
    fetchArticleListsFail,
    fetchArticleListsRequest,
    fetchArticleListsSuccess,
  ]),
  [OPEN_ARTICLE_DISPLAY]: openArticleDisplay,
  [TOGGLE_WEEK_ITEM_LIST]: toggleWeekItemList,
});
