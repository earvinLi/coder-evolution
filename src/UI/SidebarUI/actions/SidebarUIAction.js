// Internal Dependencies
import { TOGGLE_WEEK_ITEM_LIST } from '../../../App/ActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const toggleWeekItemList = (week) => (dispatch, getState) => {
  const { weekItemListIsOpen } = getState().UI.Sidebar;
  const weekItemListIsOpenToUpdate = [...weekItemListIsOpen];
  const weekIndex = weekItemListIsOpenToUpdate.indexOf(week);

  if (weekIndex > -1) {
    weekItemListIsOpenToUpdate.splice(weekIndex, 1);
  } else {
    weekItemListIsOpenToUpdate.push(week);
  }

  dispatch({
    type: TOGGLE_WEEK_ITEM_LIST,
    weekItemListIsOpen: weekItemListIsOpenToUpdate,
  });
};
