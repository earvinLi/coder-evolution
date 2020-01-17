// Artical Add Actions Types
export const CLOSE_ARTICLE_ADD_DIALOG = 'CLOSE_ARTICLE_ADD_DIALOG';
export const OPEN_ARTICLE_ADD_DIALOG = 'OPEN_ARTICLE_ADD_DIALOG';
export const TOGGLE_ARTICLE_LIST_ACTION_MODE = 'TOGGLE_ARTICLE_LIST_ACTION_MODE';
export const UPDATE_ARTICLE_ADD_INFO = 'UPDATE_ARTICLE_ADD_INFO';

// Artical Display Action Types
export const CLOSE_ARTICLE_EDITOR = 'CLOSE_ARTICLE_EDITOR';
export const OPEN_ARTICLE_EDITOR = 'OPEN_ARTICLE_EDITOR';
export const SAVE_ARTICLE_TEXT = 'SAVE_ARTICLE_TEXT';
export const UPDATE_ARTICLE_TEXT = 'UPDATE_ARTICLE_TEXT';

// Sidebar Action Types
export const OPEN_ARTICLE = 'OPEN_ARTICLE';
export const TOGGLE_WEEK_ITEM_LIST = 'TOGGLE_WEEK_ITEM_LIST';

// Fetch Action Types Helper
const apiCallingActions = {
  addArticle: 'ADD_ARTICLE',
  fetchArticleLists: 'FETCH_ARTICLE_LISTS',
  fetchArticles: 'FETCH_ARTICLES',
  fetchArticle: 'FETCH_ARTICLE',
  saveArticle: 'SAVE_ARTICLE',
};

export const getAPICallingActionTypes = (apiCallingAction) => {
  const apiCallingActionToUse = apiCallingActions[apiCallingAction];
  return [
    `${apiCallingActionToUse}_FAIL`,
    `${apiCallingActionToUse}_REQUEST`,
    `${apiCallingActionToUse}_SUCCEED`,
  ];
};
