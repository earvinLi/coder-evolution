// Internal Dependencies
import { createReducer } from '../../../App/RootUtilities';
import { TOGGLE_WEEK_ITEM_LIST } from '../../../App/ActionTypes';

const INITIAL_STATE = {
  weekOneItemListIsOpen: false,
  weekTwoItemListIsOpen: false,
  weekThreeItemListIsOpen: false,
  weekFourItemListIsOpen: false,
};

const toggleWeekItemList = (state, action) => ({
  ...state,
  [action.week]: !state[action.week],
});

export default createReducer(INITIAL_STATE, {
  [TOGGLE_WEEK_ITEM_LIST]: toggleWeekItemList,
});
