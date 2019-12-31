// Internal Dependencies
import {
  createActionCreator,
  fetchRequest,
} from '../../App/RootUtilities';
import {
  CLOSE_ARTICLE_EDITOR,
  SAVE_ARTICLE_TEXT,
  UPDATE_ARTICLE_TEXT,
} from '../../App/ActionTypes';

export const closeArticleEditor = createActionCreator(CLOSE_ARTICLE_EDITOR);

export const saveArticleText = (articleText) => async (dispatch, getState) => {
  const { currentArticle } = getState().UI.Sidebar;
  const savedArticle = await fetchRequest('https://ibr6yzhzy4.execute-api.ap-northeast-1.amazonaws.com/prod/articles', {
    method: 'PUT',
    body: JSON.stringify({
      articleName: currentArticle,
      articleText,
    }),
  });
  console.log(savedArticle);

  dispatch({
    type: SAVE_ARTICLE_TEXT,
    savedArticle,
  });
};

export const updateArticleText = createActionCreator(UPDATE_ARTICLE_TEXT, 'articleText');
