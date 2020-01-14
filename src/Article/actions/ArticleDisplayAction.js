// Internal Dependencies
import { fetchRequest } from '../../App/RootUtilities';
import {
  FETCH_ARTICLE_TEXT_FAIL,
  FETCH_ARTICLE_TEXT_REQUEST,
  FETCH_ARTICLE_TEXT_SUCCEED,
  OPEN_ARTICLE_EDITOR,
} from '../../App/ActionTypes';

export const fetchArticle = () => ({
  types: [
    FETCH_ARTICLE_TEXT_FAIL,
    FETCH_ARTICLE_TEXT_REQUEST,
    FETCH_ARTICLE_TEXT_SUCCEED,
  ],
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
