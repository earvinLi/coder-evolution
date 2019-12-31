// Internal Dependencies
import { fetchRequest } from '../../App/RootUtilities';
import {
  FETCH_ARTICLE_TEXT,
  OPEN_ARTICLE_EDITOR,
} from '../../App/ActionTypes';

export const fetchArticle = () => async (dispatch, getState) => {
  const { currentArticle } = getState().UI.Sidebar;
  const { articleText } = await fetchRequest(`https://ibr6yzhzy4.execute-api.ap-northeast-1.amazonaws.com/prod/articles/${currentArticle}`);

  dispatch({
    type: FETCH_ARTICLE_TEXT,
    fetchedArticle: articleText,
  });
};

export const openArticleEditor = () => (dispatch, getState) => {
  const { fetchedArticle } = getState().Article.ArticleDisplay;

  dispatch({
    type: OPEN_ARTICLE_EDITOR,
    articleText: fetchedArticle,
  });
};
