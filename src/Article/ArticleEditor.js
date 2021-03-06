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
import DotsLoader from '../SharedUnits/DotsLoader';
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
    dotsLoaderDotStyle,
    dotsLoaderWaveStyle,
    editorContainerStyle,
    editorInputStyle,
    markdownViewerStyle,
    paperStyle,
  } = makeStyles((theme) => getArticleEditorStyles(theme))();

  const {
    articleText,
    isSavingArticleText,
    onSaveArticleText,
    onUpdateArticleText,
  } = props;

  const onArticleTextInput = (event) => onUpdateArticleText(event.target.value);
  const onSaveButtonClick = () => onSaveArticleText(articleText);

  return (
    <Paper className={paperStyle}>
      <div className={editorContainerStyle}>
        <textarea
          className={editorInputStyle}
          onChange={onArticleTextInput}
          value={articleText}
        />
        <MarkdownViewer
          markdownText={articleText}
          variantStyle={markdownViewerStyle}
        />
      </div>
      <div className={buttonContainerStyle}>
        {isSavingArticleText
          ? (
            <DotsLoader
              variantDotStyle={dotsLoaderDotStyle}
              variantWaveStyle={dotsLoaderWaveStyle}
            />
          )
          : (
            <Button
              className={buttonStyle}
              color="primary"
              onClick={onSaveButtonClick}
              size="large"
              startIcon={<SaveOutlinedIcon />}
            >
              Save
            </Button>
          )}
      </div>
    </Paper>
  );
};

ArticleEditor.propTypes = {
  articleText: PropTypes.string.isRequired,
  isSavingArticleText: PropTypes.bool.isRequired,
  onSaveArticleText: PropTypes.func.isRequired,
  onUpdateArticleText: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    articleText,
    isSaving: isSavingArticleText,
  } = state.Article.ArticleEditor;

  return {
    articleText,
    isSavingArticleText,
  };
};

export default connect(mapStateToProps, {
  onCloseArticleEditor: closeArticleEditor,
  onSaveArticleText: saveArticleText,
  onUpdateArticleText: updateArticleText,
})(ArticleEditor);
