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
  types: getAPICallingActionTypes('FETCH', 'ARTICLES'),
  apiCallingFunction: (state) => {
    const user = state.Account.userEmail;
    return fetchRequest(`http://localhost:3001/articles/${user}/${articleList}`);
  },
  payload: { articleList },
  shouldCallAPI: (state) => !Object.prototype.hasOwnProperty.call(
    state.UI.Sidebar.Articles.fetchedArticles,
    articleList,
  ),
});

export const openArticle = createActionCreator(OPEN_ARTICLE, 'articleName');
