// Internal Dependencies
import {
  createActionCreator,
  fetchRequest,
} from '../../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  OPEN_ARTICLE,
} from '../../../App/ActionTypes';

export const fetchArticles = (articleList) => ({
  types: getAPICallingActionTypes('fetchArticles'),
  apiCallingFunction: (state) => {
    const user = state.Account.userEmail;
    return fetchRequest(`/articles/${user}/${articleList}`);
  },
  payload: { articleList },
  shouldCallAPI: (state) => !Object.prototype.hasOwnProperty.call(
    state.UI.Sidebar.Articles.fetchedArticles,
    articleList,
  ),
});

export const openArticle = createActionCreator(OPEN_ARTICLE, 'articleName');
