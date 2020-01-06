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
    articleSavedAt,
    currentArticle,
    fetchedArticle,
    onFetchArticle,
    onOpenArticleEditor,
  } = props;

  // TODO: Change to make every saving fetch the updated article
  useEffect(() => {
    onFetchArticle();
  }, [currentArticle, onFetchArticle, articleSavedAt]);

  const isFetching = false;
  return isFetching
    ? (
      <ContentLoadingScreen
        loadingContent="your article"
      />
    )
    : (
      <Paper className={paperStyle}>
        <MarkdownViewer markdownText={fetchedArticle} />
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
  articleSavedAt: PropTypes.number,
  currentArticle: PropTypes.string.isRequired,
  fetchedArticle: PropTypes.string.isRequired,
  onFetchArticle: PropTypes.func.isRequired,
  onOpenArticleEditor: PropTypes.func.isRequired,
};

ArticleDisplay.defaultProps = {
  articleSavedAt: 0,
};

const mapStateToProps = (state) => {
  const {
    fetchedArticle,
    savedArticle,
  } = state.Article.ArticleDisplay;
  const { currentArticle } = state.UI.Sidebar;

  return {
    currentArticle,
    fetchedArticle,
    savedArticle,
  };
};

export default connect(mapStateToProps, {
  onFetchArticle: fetchArticle,
  onOpenArticleEditor: openArticleEditor,
})(ArticleDisplay);
