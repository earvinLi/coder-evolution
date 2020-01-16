// Internal Dependencies
import {
  createReducer,
  getAPICallingReducerHandlers,
} from '../../App/RootUtilities';
import {
  getAPICallingActionTypes,
  CLOSE_ARTICLE_EDITOR,
  OPEN_ARTICLE_EDITOR,
  UPDATE_ARTICLE_TEXT,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  articleSavedTime: 0,
  articleText: '',
  isOpen: false,
};

const closeArticleEditor = () => INITIAL_STATE;

const openArticleEditor = (state, action) => ({
  articleText: action.articleText,
  isOpen: true,
  isSaving: false,
});

const saveArticleTextFail = (state, action) => ({ ...state, fetchError: action.error });
const saveArticleTextRequest = (state) => ({ ...state, isSaving: true });
const saveArticleTextSucceed = (state, action) => ({
  ...state,
  articleSavedTime: action.articleSavedTime,
  isOpen: false,
  isSaving: false,
});

const updateArticleText = (state, action) => ({
  ...state,
  articleText: action.articleText,
});

export default createReducer(INITIAL_STATE, {
  ...getAPICallingReducerHandlers(getAPICallingActionTypes('SAVE', 'ARTICLE_TEXT'), [
    saveArticleTextFail,
    saveArticleTextRequest,
    saveArticleTextSucceed,
  ]),
  [CLOSE_ARTICLE_EDITOR]: closeArticleEditor,
  [OPEN_ARTICLE_EDITOR]: openArticleEditor,
  [UPDATE_ARTICLE_TEXT]: updateArticleText,
});
