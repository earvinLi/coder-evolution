// Internal Dependencies
import {
  createReducer,
  getAPICallingReducerHandlers,
} from '../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  CLOSE_ARTICLE_ADD_DIALOG,
  OPEN_ARTICLE_ADD_DIALOG,
  TOGGLE_ARTICLE_LIST_ACTION_MODE,
  UPDATE_ARTICLE_ADD_INFO,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  addError: '',
  articleList: '',
  articleName: '',
  isAdding: false,
  isOpen: false,
  toSelectArticleList: true,
};

const addArticleFail = (state, action) => ({ ...state, addError: action.error });
const addArticleRequest = (state) => ({ ...state, isAdding: true });
const addArticleSucceed = (state, action) => ({
  ...state,
  articleSavedTime: action.articleSavedTime,
  isOpen: false,
  isAdding: false,
});

const closeArticleAddDialog = () => INITIAL_STATE;
const openArticleAddDialog = () => ({ ...INITIAL_STATE, isOpen: true });
const toggleArticleListActionMode = (state) => ({
  ...state,
  toSelectArticleList: !state.toSelectArticleList,
});

const updateArticleAddInfo = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

export default createReducer(INITIAL_STATE, {
  ...getAPICallingReducerHandlers(getAPICallingActionTypes('addArticle'), [
    addArticleFail,
    addArticleRequest,
    addArticleSucceed,
  ]),
  [CLOSE_ARTICLE_ADD_DIALOG]: closeArticleAddDialog,
  [OPEN_ARTICLE_ADD_DIALOG]: openArticleAddDialog,
  [TOGGLE_ARTICLE_LIST_ACTION_MODE]: toggleArticleListActionMode,
  [UPDATE_ARTICLE_ADD_INFO]: updateArticleAddInfo,
});
