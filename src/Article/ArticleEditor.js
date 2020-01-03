// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getArticleEditorStyles from './styles/ArticleEditorStyle';
import {
  closeArticleEditor,
  saveArticleText,
  updateArticleText,
} from './actions/ArticleEditorAction';

// Component Definition
const ArticleEditor = (props) => {
  const {
    editorContainerStyle,
    paperStyle,
  } = makeStyles((theme) => getArticleEditorStyles(theme))();

  const {
    articleText,
    onCloseArticleEditor,
    onSaveArticleText,
    onUpdateArticleText,
  } = props;

  const onSaveButtonClick = () => {
    onSaveArticleText(articleText);
    onCloseArticleEditor();
  };

  return (
    <Paper className={paperStyle}>
      <textarea
        className={editorContainerStyle}
        onChange={(event) => onUpdateArticleText(event.target.value)}
        value={articleText}
      />
      <Button
        color="primary"
        onClick={onSaveButtonClick}
        size="large"
        startIcon={<EditIcon />}
        variant="contained"
      >
        Save
      </Button>
    </Paper>
  );
};

ArticleEditor.propTypes = {
  articleText: PropTypes.string.isRequired,
  onCloseArticleEditor: PropTypes.func.isRequired,
  onSaveArticleText: PropTypes.func.isRequired,
  onUpdateArticleText: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { articleText } = state.Article.ArticleEditor;

  return { articleText };
};

export default connect(mapStateToProps, {
  onCloseArticleEditor: closeArticleEditor,
  onSaveArticleText: saveArticleText,
  onUpdateArticleText: updateArticleText,
})(ArticleEditor);
