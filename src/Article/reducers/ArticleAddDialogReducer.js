// Internal Dependencies
import {
  createReducer,
  getAPICallingReducerHandlers,
} from '../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  CLOSE_ARTICLE_ADD_DIALOG,
  OPEN_ARTICLE_ADD_DIALOG,
  UPDATE_ARTICLE_ADD_INFO,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  addError: '',
  articleList: '',
  articleName: '',
  isAdding: false,
  isOpen: false,
};

const closeArticleAddDialog = () => INITIAL_STATE;
const openArticleAddDialog = () => ({ isOpen: true });

const addArticleFail = (state, action) => ({ ...state, addError: action.error });
const addArticleRequest = (state) => ({ ...state, isAdding: true });
const addArticleSucceed = (state, action) => ({
  ...state,
  articleSavedTime: action.articleSavedTime,
  isOpen: false,
  isAdding: false,
});

const updateArticleAddInfo = (state, action) => ({
  ...state,
  articleList: action.articleList,
  articleName: action.articleName,
});

export default createReducer(INITIAL_STATE, {
  ...getAPICallingReducerHandlers(getAPICallingActionTypes('addArticle'), [
    addArticleFail,
    addArticleRequest,
    addArticleSucceed,
  ]),
  [CLOSE_ARTICLE_ADD_DIALOG]: closeArticleAddDialog,
  [OPEN_ARTICLE_ADD_DIALOG]: openArticleAddDialog,
  [UPDATE_ARTICLE_ADD_INFO]: updateArticleAddInfo,
});
