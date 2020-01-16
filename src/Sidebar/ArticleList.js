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
import getweekOneItemListStyles from './styles/WeekOneItemListStyle';
import { fetchArticles } from '../UI/SidebarUI/actions/ArticlesAction';
import { openArticleDisplay } from '../UI/SidebarUI/actions/ArticleListsAction';

// Component Definition
const WeekOneItemList = (props) => {
  const {
    subitemSelectedStyle,
  } = makeStyles((theme) => getweekOneItemListStyles(theme))();

  const {
    articleList,
    currentArticle,
    fetchedArticles,
    onOpenArticleDisplay,
  } = props;

  const ListItems = fetchedArticles[articleList].map((article) => {
    const onSubitemClick = () => onOpenArticleDisplay(article);

    return (
      <ListItem
        button
        className={clsx(article === currentArticle && subitemSelectedStyle)}
        key={article}
        onClick={onSubitemClick}
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
  onOpenArticleDisplay: openArticleDisplay,
})(WeekOneItemList);
