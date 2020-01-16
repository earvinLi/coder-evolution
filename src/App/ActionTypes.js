// Artical Display Action Types
export const CLOSE_ARTICLE_EDITOR = 'CLOSE_ARTICLE_EDITOR';
export const OPEN_ARTICLE_EDITOR = 'OPEN_ARTICLE_EDITOR';
export const SAVE_ARTICLE_TEXT = 'SAVE_ARTICLE_TEXT';
export const UPDATE_ARTICLE_TEXT = 'UPDATE_ARTICLE_TEXT';

// Sidebar Action Types
export const OPEN_ARTICLE = 'OPEN_ARTICLE';
export const TOGGLE_WEEK_ITEM_LIST = 'TOGGLE_WEEK_ITEM_LIST';

// Fetch Action Types Helper
export const getAPICallingActionTypes = (actionToDo, itemToFetch) => [
  `${actionToDo}_${itemToFetch}_FAIL`,
  `${actionToDo}_${itemToFetch}_REQUEST`,
  `${actionToDo}_${itemToFetch}_SUCCEED`,
];
