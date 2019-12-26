// Internal Dependencies
import {
  OPEN_ARTICLE_EDITOR,
} from '../../App/ActionTypes';

export const fetchArticle = () => {};

export const openArticleEditor = () => (dispatch, getState) => {
  const { currentArticle } = getState().Article.ArticleDisplay;

  dispatch({
    type: OPEN_ARTICLE_EDITOR,
    articleText: currentArticle,
  });
};
