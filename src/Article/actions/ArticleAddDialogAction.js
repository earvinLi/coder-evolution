// Internal Dependencies
import {
  createActionCreator,
  fetchRequest,
} from '../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  CLOSE_ARTICLE_ADD_DIALOG,
  OPEN_ARTICLE_ADD_DIALOG,
  UPDATE_ARTICLE_ADD_INFO,
} from '../../App/ActionTypes';

export const closeArticleAddDialog = createActionCreator(CLOSE_ARTICLE_ADD_DIALOG);
export const openArticleAddDialog = createActionCreator(OPEN_ARTICLE_ADD_DIALOG);

export const addArticle = () => ({
  types: getAPICallingActionTypes('addArticle'),
  apiCallingFunction: (state) => {
    const user = state.Account.userEmail;
    const {
      articleList,
      articleName,
    } = state.UI.Article.ArticleAddDialog;
    return fetchRequest('http://localhost:3001/article', {
      method: 'POST',
      body: JSON.stringify({
        ArticleList: articleList,
        ArticleName: articleName,
        UserEmail: user,
      }),
    });
  },
  payload: { articleAddedTime: Date.now() },
});

export const updateArticleText = createActionCreator(UPDATE_ARTICLE_ADD_INFO, 'articleName', 'articleList');
