// Internal Dependencies
import { createActionCreator } from '../../App/RootUtilities';
import {
  OPEN_ARTICLE_EDITOR,
} from '../../App/ActionTypes';

export const fetchArticle = () => {};

export const openArticleEditor = createActionCreator(OPEN_ARTICLE_EDITOR, 'articleText');
