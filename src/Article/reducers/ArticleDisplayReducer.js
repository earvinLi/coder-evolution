// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import { SAVE_ARTICLE_TEXT } from '../../App/ActionTypes';

const INITIAL_STATE = {
  currentArticle: '# Week One',
};

const saveArticleText = (state, action) => ({
  ...state,
  currentArticle: action.currentArticle,
});

export default createReducer(INITIAL_STATE, {
  [SAVE_ARTICLE_TEXT]: saveArticleText,
});
