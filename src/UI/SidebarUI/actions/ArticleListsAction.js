// Internal Dependencies
import { fetchRequest } from '../../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  TOGGLE_WEEK_ITEM_LIST,
} from '../../../App/ActionTypes';

export const fetchArticleLists = () => ({
  types: getAPICallingActionTypes('fetchArticleLists'),
  apiCallingFunction: (state) => {
    const user = state.Account.userEmail;
    return fetchRequest(`/article-lists/${user}`);
  },
});

// eslint-disable-next-line import/prefer-default-export
export const toggleArticleList = (articleList) => (dispatch, getState) => {
  const { openedArticleLists } = getState().UI.Sidebar.ArticleLists;
  const openedArticleListsToUpdate = [...openedArticleLists];
  const articleListIndex = openedArticleListsToUpdate.indexOf(articleList);

  if (articleListIndex > -1) {
    openedArticleListsToUpdate.splice(articleListIndex, 1);
  } else {
    openedArticleListsToUpdate.push(articleList);
  }

  dispatch({
    type: TOGGLE_WEEK_ITEM_LIST,
    openedArticleLists: openedArticleListsToUpdate,
  });
};
