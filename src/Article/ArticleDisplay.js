// External Dependencies
import PropTypes from 'prop-types';
import marked from 'marked';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getArticleDisplayStyles from './styles/ArticleDisplayStyle';
import {
  fetchArticle,
  openArticleEditor,
} from './actions/ArticleDisplayAction';

// Component Definition
const ArticleDisplay = (props) => {
  const {
    paperStyle,
  } = makeStyles((theme) => getArticleDisplayStyles(theme))();

  const {
    fetchedArticle,
    onFetchArticle,
    onOpenArticleEditor,
    savedArticle,
  } = props;

  // TODO: Change not to use expensive 'savedArticle' for fetches and rerenders
  useEffect(() => {
    onFetchArticle();
  }, [onFetchArticle, savedArticle]);

  const markedText = marked(fetchedArticle);

  return (
    <Paper className={paperStyle}>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: markedText }} />
      <Button
        color="primary"
        size="large"
        startIcon={<EditIcon />}
        onClick={onOpenArticleEditor}
        variant="contained"
      >
        Edit
      </Button>
    </Paper>
  );
};

// Prop Validations
ArticleDisplay.propTypes = {
  fetchedArticle: PropTypes.string.isRequired,
  onFetchArticle: PropTypes.func.isRequired,
  onOpenArticleEditor: PropTypes.func.isRequired,
  savedArticle: PropTypes.string,
};

ArticleDisplay.defaultProps = {
  savedArticle: '',
};

const mapStateToProps = (state) => {
  const {
    fetchedArticle,
    savedArticle,
  } = state.Article.ArticleDisplay;

  return {
    fetchedArticle,
    savedArticle,
  };
};

export default connect(mapStateToProps, {
  onFetchArticle: fetchArticle,
  onOpenArticleEditor: openArticleEditor,
})(ArticleDisplay);
