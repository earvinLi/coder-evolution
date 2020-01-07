// Internal Dependencies
import { fetchRequest } from '../../App/RootUtilities';
import {
  FETCH_ARTICLE_TEXT_REQUEST,
  FETCH_ARTICLE_TEXT_SUCCESS,
  OPEN_ARTICLE_EDITOR,
} from '../../App/ActionTypes';

export const fetchArticle = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_ARTICLE_TEXT_REQUEST });

  const { currentArticle } = getState().UI.Sidebar;
  const { articleText } = await fetchRequest(`https://ibr6yzhzy4.execute-api.ap-northeast-1.amazonaws.com/prod/articles/${currentArticle}`);

  dispatch({
    type: FETCH_ARTICLE_TEXT_SUCCESS,
    fetchedArticleText: articleText,
  });
};

export const openArticleEditor = () => (dispatch, getState) => {
  const { fetchedArticleText } = getState().Article.ArticleDisplay;

  dispatch({
    type: OPEN_ARTICLE_EDITOR,
    articleText: fetchedArticleText,
  });
};
