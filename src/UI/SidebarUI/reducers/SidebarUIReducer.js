// Internal Dependencies
import { createReducer } from '../../../App/RootUtilities';
import { TOGGLE_WEEK_ITEM_LIST } from '../../../App/ActionTypes';

const INITIAL_STATE = {
  weekItemListIsOpen: [],
};

const toggleWeekItemList = (state, action) => ({
  ...state,
  weekItemListIsOpen: action.weekItemListIsOpen,
});

export default createReducer(INITIAL_STATE, {
  [TOGGLE_WEEK_ITEM_LIST]: toggleWeekItemList,
});
