// External Dependencies
import PropTypes from 'prop-types';
import marked from 'marked';
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import ArticleEditor from './ArticleEditor';
import getArticleDisplayStyles from './styles/ArticleDisplayStyle';
import { openArticleEditor } from './actions/ArticleDisplayAction';

// Component Definition
const ArticleDisplay = (props) => {
  const {
    paperStyle,
  } = makeStyles((theme) => getArticleDisplayStyles(theme))();

  const {
    articleEditorIsOpen,
    currentArticle,
    onOpenArticleEditor,
  } = props;

  const markedText = marked(currentArticle);

  return articleEditorIsOpen
    ? <ArticleEditor />
    : (
      <Paper className={paperStyle}>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: markedText }} />
        <Button
          color="primary"
          size="large"
          startIcon={<EditIcon />}
          onClick={() => onOpenArticleEditor(currentArticle)}
          variant="contained"
        >
          Edit
        </Button>
      </Paper>
    );
};

ArticleDisplay.propTypes = {
  articleEditorIsOpen: PropTypes.bool.isRequired,
  currentArticle: PropTypes.string.isRequired,
  onOpenArticleEditor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { currentArticle } = state.Article.ArticleDisplay;
  const { isOpen: articleEditorIsOpen } = state.Article.ArticleEditor;

  return {
    articleEditorIsOpen,
    currentArticle,
  };
};

export default connect(mapStateToProps, {
  onOpenArticleEditor: openArticleEditor,
})(ArticleDisplay);
