// Internal Dependencies
import {
  FETCH_ARTICLE_TEXT,
  OPEN_ARTICLE_EDITOR,
} from '../../App/ActionTypes';

export const fetchArticle = () => (dispatch, getState) => {
  const { currentArticle } = getState().UI.Sidebar;
  const fetchedArticle = window.localStorage.getItem(currentArticle);

  dispatch({
    type: FETCH_ARTICLE_TEXT,
    fetchedArticle,
  });
};

export const openArticleEditor = () => (dispatch, getState) => {
  const { fetchedArticle } = getState().Article.ArticleDisplay;

  dispatch({
    type: OPEN_ARTICLE_EDITOR,
    articleText: fetchedArticle,
  });
};
