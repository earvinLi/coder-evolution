// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import ContentLoadingScreen from '../SharedUnits/ContentLoadingScreen';
import getArticleDisplayStyles from './styles/ArticleDisplayStyle';
import MarkdownViewer from '../SharedUnits/MarkdownViewer';
import {
  fetchArticle,
  openArticleEditor,
} from './actions/ArticleDisplayAction';

// Component Definition
const ArticleDisplay = (props) => {
  const {
    buttonStyle,
    buttonContainerStyle,
    paperStyle,
  } = makeStyles((theme) => getArticleDisplayStyles(theme))();

  const {
    articleSavedTime,
    currentArticle,
    fetchedArticleText,
    isFetchingArticleText,
    onFetchArticle,
    onOpenArticleEditor,
  } = props;

  // TODO: Change to make every saving fetch the updated article
  useEffect(() => {
    onFetchArticle();
  }, [currentArticle, onFetchArticle, articleSavedTime]);

  return isFetchingArticleText
    ? (
      <ContentLoadingScreen
        loadingContent="your article"
      />
    )
    : (
      <Paper className={paperStyle}>
        <MarkdownViewer markdownText={fetchedArticleText} />
        <div className={buttonContainerStyle}>
          <Button
            className={buttonStyle}
            color="primary"
            size="large"
            startIcon={<EditOutlinedIcon />}
            onClick={onOpenArticleEditor}
          >
            Edit
          </Button>
        </div>
      </Paper>
    );
};

// Prop Validations
ArticleDisplay.propTypes = {
  articleSavedTime: PropTypes.number,
  currentArticle: PropTypes.string.isRequired,
  fetchedArticleText: PropTypes.string.isRequired,
  isFetchingArticleText: PropTypes.bool.isRequired,
  onFetchArticle: PropTypes.func.isRequired,
  onOpenArticleEditor: PropTypes.func.isRequired,
};

ArticleDisplay.defaultProps = {
  articleSavedTime: 0,
};

const mapStateToProps = (state) => {
  const {
    articleSavedTime,
    fetchedArticleText,
    isFetching: isFetchingArticleText,
  } = state.Article.ArticleDisplay;
  const { currentArticle } = state.UI.Sidebar;

  return {
    articleSavedTime,
    currentArticle,
    fetchedArticleText,
    isFetchingArticleText,
  };
};

export default connect(mapStateToProps, {
  onFetchArticle: fetchArticle,
  onOpenArticleEditor: openArticleEditor,
})(ArticleDisplay);
