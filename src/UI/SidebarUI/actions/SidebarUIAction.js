// Internal Dependencies
import {
  createActionCreator,
  fetchRequest,
} from '../../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  OPEN_ARTICLE_DISPLAY,
  TOGGLE_WEEK_ITEM_LIST,
} from '../../../App/ActionTypes';

export const fetchArticleLists = () => ({
  types: getAPICallingActionTypes('FETCH', 'ARTICLE_LISTS'),
  apiCallingFunction: (state) => {
    const user = state.Account.userEmail;
    return fetchRequest(`http://localhost:3001/article-lists/${user}`);
  },
});

export const openArticleDisplay = createActionCreator(OPEN_ARTICLE_DISPLAY, 'articleName');

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
