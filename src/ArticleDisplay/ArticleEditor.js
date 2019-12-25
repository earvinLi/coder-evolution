// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getArticleDisplayStyles from './styles/ArticleDisplayStyle';
import {
  closeArticleEditor,
  saveArticleText,
  updateArticleText,
} from './actions/ArticleEditorAction';

// Component Definition
const ArticleEditor = (props) => {
  const {
    paperStyle,
  } = makeStyles((theme) => getArticleDisplayStyles(theme))();

  const {
    articleText,
    onCloseArticleEditor,
    onSaveArticleText,
    onUpdateArticleText,
  } = props;

  return (
    <Paper className={paperStyle}>
      <TextareaAutosize
        onChange={(event) => onUpdateArticleText(event.target.value)}
        value={articleText}
      />
      <Button
        color="primary"
        onClick={() => {
          onSaveArticleText(articleText);
          onCloseArticleEditor();
        }}
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
