// Internal Dependencies
import {
  createActionCreator,
  fetchRequest,
} from '../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  OPEN_ARTICLE_EDITOR,
} from '../../App/ActionTypes';

export const fetchArticle = () => ({
  types: getAPICallingActionTypes('fetchArticle'),
  apiCallingFunction: (state) => {
    const user = state.Account.userEmail;
    const { currentArticle } = state.UI.Sidebar.Articles;
    return fetchRequest(`http://localhost:3001/article/${user}/${currentArticle}`);
  },
});

export const openArticleEditor = createActionCreator(OPEN_ARTICLE_EDITOR, 'articleText');
