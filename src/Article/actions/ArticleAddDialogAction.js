// Internal Dependencies
import {
  createActionCreator,
  fetchRequest,
} from '../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  CLOSE_ARTICLE_ADD_DIALOG,
  OPEN_ARTICLE_ADD_DIALOG,
  TOGGLE_ARTICLE_LIST_ACTION_MODE,
  UPDATE_ARTICLE_ADD_INFO,
} from '../../App/ActionTypes';

export const closeArticleAddDialog = createActionCreator(CLOSE_ARTICLE_ADD_DIALOG);
export const openArticleAddDialog = createActionCreator(OPEN_ARTICLE_ADD_DIALOG);
export const toggleArticleListActionMode = createActionCreator(TOGGLE_ARTICLE_LIST_ACTION_MODE);

export const addArticle = () => ({
  types: getAPICallingActionTypes('addArticle'),
  apiCallingFunction: (state) => {
    const user = state.Account.userEmail;
    const {
      articleList,
      articleName,
    } = state.Article.ArticleAddDialog;

    return fetchRequest('/article', {
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

export const updateArticleAddInfo = createActionCreator(UPDATE_ARTICLE_ADD_INFO, 'prop', 'value');
