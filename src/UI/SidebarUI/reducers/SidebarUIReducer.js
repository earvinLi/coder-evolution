// Internal Dependencies
import { createReducer } from '../../../App/RootUtilities';
import {
  OPEN_ARTICLE_DISPLAY,
  TOGGLE_WEEK_ITEM_LIST,
} from '../../../App/ActionTypes';

const INITIAL_STATE = {
  weekItemListIsOpen: [],
  currentArticle: '',
};

const openArticleDisplay = (state, action) => ({
  ...state,
  currentArticle: action.articleName,
});

const toggleWeekItemList = (state, action) => ({
  ...state,
  weekItemListIsOpen: action.weekItemListIsOpen,
});

export default createReducer(INITIAL_STATE, {
  [OPEN_ARTICLE_DISPLAY]: openArticleDisplay,
  [TOGGLE_WEEK_ITEM_LIST]: toggleWeekItemList,
});
