// Internal Dependencies
import { createActionCreator } from '../../../App/RootUtilities';
import { TOGGLE_WEEK_ITEM_LIST } from '../../../App/ActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const toggleWeekItemList = createActionCreator(TOGGLE_WEEK_ITEM_LIST, 'week');
