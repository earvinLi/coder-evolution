// External Dependencies
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getArticleListStyles from './styles/ArticleListStyle';
import {
  fetchArticles,
  openArticle,
} from '../UI/SidebarUI/actions/ArticlesAction';

// Component Definition
const WeekOneItemList = (props) => {
  const {
    articleSelectedStyle,
  } = makeStyles((theme) => getArticleListStyles(theme))();

  const {
    articleList,
    currentArticle,
    fetchedArticles,
    onOpenArticleDisplay,
  } = props;

  const ListItems = fetchedArticles[articleList].map((article) => {
    const onArticleClick = () => onOpenArticleDisplay(article);

    return (
      <ListItem
        button
        className={clsx(article === currentArticle && articleSelectedStyle)}
        key={article}
        onClick={onArticleClick}
      >
        <ListItemText primary={article} />
      </ListItem>
    );
  });

  return (
    <List component="div">
      {ListItems}
    </List>
  );
};

// Prop Validations
WeekOneItemList.propTypes = {
  articleList: PropTypes.string.isRequired,
  currentArticle: PropTypes.string.isRequired,
  fetchedArticles: PropTypes.shape({}).isRequired,
  onOpenArticleDisplay: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    currentArticle,
    fetchedArticles,
  } = state.UI.Sidebar.Articles;

  return {
    currentArticle,
    fetchedArticles,
  };
};

export default connect(mapStateToProps, {
  onFetchArticles: fetchArticles,
  onOpenArticleDisplay: openArticle,
})(WeekOneItemList);
