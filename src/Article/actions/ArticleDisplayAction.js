// Internal Dependencies
import { fetchRequest } from '../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  OPEN_ARTICLE_EDITOR,
} from '../../App/ActionTypes';

export const fetchArticle = () => ({
  types: getAPICallingActionTypes('FETCH', 'ARTICLE_TEXT'),
  apiCallingFunction: (state) => {
    const { currentArticle } = state.UI.Sidebar;
    return fetchRequest(`https://ibr6yzhzy4.execute-api.ap-northeast-1.amazonaws.com/prod/articles/${currentArticle}`);
  },
});

export const openArticleEditor = () => (dispatch, getState) => {
  const { fetchedArticleText } = getState().Article.ArticleDisplay;

  dispatch({
    type: OPEN_ARTICLE_EDITOR,
    articleText: fetchedArticleText,
  });
};
