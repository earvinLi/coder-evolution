// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  CLOSE_ARTICLE_EDITOR,
  SAVE_ARTICLE_TEXT,
  UPDATE_ARTICLE_TEXT,
} from '../../App/ActionTypes';

export const closeArticleEditor = createActionCreator(CLOSE_ARTICLE_EDITOR);

export const saveArticleText = createActionCreator(SAVE_ARTICLE_TEXT, 'currentArticle');

export const updateArticleText = createActionCreator(UPDATE_ARTICLE_TEXT, 'articleText');
