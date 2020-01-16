// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import ArticleList from './ArticleList';
import DotsLoader from '../SharedUnits/DotsLoader';
import getSidebarStyles from './styles/SidebarStyle';
import {
  fetchArticleLists,
  toggleArticleList,
} from '../UI/SidebarUI/actions/ArticleListsAction';
import { fetchArticles } from '../UI/SidebarUI/actions/ArticlesAction';

// Component Definition
const Sidebar = (props) => {
  const {
    collapseStyle,
    listStyle,
  } = makeStyles((theme) => getSidebarStyles(theme))();

  const {
    articleListUnderFetching,
    fetchedArticleLists,
    onFetchArticleLists,
    onFetchArticles,
    onToggleArticleList,
    openedArticleLists,
  } = props;

  useEffect(() => {
    onFetchArticleLists();
  }, [onFetchArticleLists]);

  const ListItems = fetchedArticleLists.map((articleList) => {
    const articleListIsOpen = openedArticleLists.includes(articleList);
    const articleListExpandIcon = articleListIsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />;
    const onArticleListClick = async () => {
      if (articleListUnderFetching) return;
      await onFetchArticles(articleList);
      onToggleArticleList(articleList);
    };

    return (
      <div key={articleList}>
        <ListItem
          button
          onClick={onArticleListClick}
        >
          <ListItemText primary={articleList} />
          {(articleListUnderFetching === articleList) ? <DotsLoader /> : articleListExpandIcon}
        </ListItem>
        <Collapse
          className={collapseStyle}
          in={articleListIsOpen}
          timeout="auto"
          unmountOnExit
        >
          <ArticleList
            articleList={articleList}
            listActionDisabled={Boolean(articleListUnderFetching)}
          />
        </Collapse>
      </div>
    );
  });

  return (
    <List className={listStyle}>
      {ListItems}
    </List>
  );
};

// Prop Validations
Sidebar.propTypes = {
  articleListUnderFetching: PropTypes.string,
  fetchedArticleLists: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFetchArticleLists: PropTypes.func.isRequired,
  onFetchArticles: PropTypes.func.isRequired,
  onToggleArticleList: PropTypes.func.isRequired,
  openedArticleLists: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Sidebar.defaultProps = {
  articleListUnderFetching: '',
};

const mapStateToProps = (state) => {
  const {
    fetchedArticleLists,
    openedArticleLists,
  } = state.UI.Sidebar.ArticleLists;
  const { articleListUnderFetching } = state.UI.Sidebar.Articles;

  return {
    articleListUnderFetching,
    fetchedArticleLists,
    openedArticleLists,
  };
};

export default connect(mapStateToProps, {
  onFetchArticleLists: fetchArticleLists,
  onFetchArticles: fetchArticles,
  onToggleArticleList: toggleArticleList,
})(Sidebar);
