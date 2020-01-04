// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getArticleEditorStyles from './styles/ArticleEditorStyle';
import MarkdownViewer from '../SharedUnits/MarkdownViewer';
import {
  closeArticleEditor,
  saveArticleText,
  updateArticleText,
} from './actions/ArticleEditorAction';

// Component Definition
const ArticleEditor = (props) => {
  const {
    buttonStyle,
    buttonContainerStyle,
    editorContainerStyle,
    editorInputStyle,
    markdownViewerStyle,
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
      <div className={editorContainerStyle}>
        <textarea
          className={editorInputStyle}
          onChange={(event) => onUpdateArticleText(event.target.value)}
          value={articleText}
        />
        <MarkdownViewer
          markdownText={articleText}
          variantStyle={markdownViewerStyle}
        />
      </div>
      <div className={buttonContainerStyle}>
        <Button
          className={buttonStyle}
          color="primary"
          onClick={onSaveButtonClick}
          size="large"
          startIcon={<SaveOutlinedIcon />}
        >
          Save
        </Button>
      </div>
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
