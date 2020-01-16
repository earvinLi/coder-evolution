// Internal Dependencies
import {
  createActionCreator,
  fetchRequest,
} from '../../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  OPEN_ARTICLE_DISPLAY,
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

export const openArticleDisplay = createActionCreator(OPEN_ARTICLE_DISPLAY, 'articleName');
