// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  CLOSE_ARTICLE_EDITOR,
  SAVE_ARTICLE_TEXT,
  UPDATE_ARTICLE_TEXT,
} from '../../App/ActionTypes';

export const closeArticleEditor = createActionCreator(CLOSE_ARTICLE_EDITOR);

export const saveArticleText = (articleText) => async (dispatch, getState) => {
  const { currentArticle } = getState().UI.Sidebar;
  window.localStorage.setItem(currentArticle, articleText);
  const data = { name: articleText };
  await fetch('https://wso04ok6i9.execute-api.ap-northeast-1.amazonaws.com/prod/employees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  dispatch({
    type: SAVE_ARTICLE_TEXT,
    savedArticle: articleText,
  });
};

export const updateArticleText = createActionCreator(UPDATE_ARTICLE_TEXT, 'articleText');
