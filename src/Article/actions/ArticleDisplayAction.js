// Internal Dependencies
import { fetchRequest } from '../../App/RootUtilities';
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

export const openArticleEditor = () => (dispatch, getState) => {
  const { fetchedArticleText } = getState().Article.ArticleDisplay;

  dispatch({
    type: OPEN_ARTICLE_EDITOR,
    articleText: fetchedArticleText,
  });
};
