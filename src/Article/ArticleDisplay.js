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
import getArticleDisplayStyles from './styles/ArticleDisplayStyle';
import { openArticleEditor } from './actions/ArticleDisplayAction';

// Component Definition
const ArticleDisplay = (props) => {
  const {
    paperStyle,
  } = makeStyles((theme) => getArticleDisplayStyles(theme))();

  const {
    currentArticle,
    onOpenArticleEditor,
  } = props;

  const onEditButtonClick = () => onOpenArticleEditor(currentArticle);

  const markedText = marked(currentArticle);

  return (
    <Paper className={paperStyle}>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: markedText }} />
      <Button
        color="primary"
        size="large"
        startIcon={<EditIcon />}
        onClick={onEditButtonClick}
        variant="contained"
      >
        Edit
      </Button>
    </Paper>
  );
};

ArticleDisplay.propTypes = {
  currentArticle: PropTypes.string.isRequired,
  onOpenArticleEditor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { currentArticle } = state.Article.ArticleDisplay;

  return { currentArticle };
};

export default connect(mapStateToProps, {
  onOpenArticleEditor: openArticleEditor,
})(ArticleDisplay);
