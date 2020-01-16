// Internal Dependencies
import {
  createActionCreator,
  fetchRequest,
} from '../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  CLOSE_ARTICLE_EDITOR,
  UPDATE_ARTICLE_TEXT,
} from '../../App/ActionTypes';

export const closeArticleEditor = createActionCreator(CLOSE_ARTICLE_EDITOR);

export const saveArticleText = (articleText) => ({
  types: getAPICallingActionTypes('SAVE', 'ARTICLE_TEXT'),
  apiCallingFunction: (state) => {
    const user = state.Account.userEmail;
    const { currentArticle } = state.UI.Sidebar.Articles;
    return fetchRequest('http://localhost:3001/article', {
      method: 'PUT',
      body: JSON.stringify({
        ArticleName: currentArticle,
        ArticleText: articleText,
        UserEmail: user,
      }),
    });
  },
  payload: { articleSavedTime: Date.now() },
});

export const updateArticleText = createActionCreator(UPDATE_ARTICLE_TEXT, 'articleText');
