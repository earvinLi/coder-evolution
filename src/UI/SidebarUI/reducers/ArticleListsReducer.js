// Internal Dependencies
import {
  createReducer,
  getAPICallingReducerHandlers,
} from '../../../App/RootUtilities';
import {
  getAPICallingActionTypes,
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

const toggleWeekItemList = (state, action) => ({
  ...state,
  openedArticleLists: action.openedArticleLists,
});

export default createReducer(INITIAL_STATE, {
  ...getAPICallingReducerHandlers(getAPICallingActionTypes('fetchArticleLists'), [
    fetchArticleListsFail,
    fetchArticleListsRequest,
    fetchArticleListsSucceed,
  ]),
  [TOGGLE_WEEK_ITEM_LIST]: toggleWeekItemList,
});
