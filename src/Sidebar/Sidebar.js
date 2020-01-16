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
    const onArticleListClick = async () => {
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
          {articleListIsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
        </ListItem>
        <Collapse
          className={collapseStyle}
          in={articleListIsOpen}
          timeout="auto"
          unmountOnExit
        >
          <ArticleList articleList={articleList} />
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

Sidebar.propTypes = {
  fetchedArticleLists: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFetchArticleLists: PropTypes.func.isRequired,
  onFetchArticles: PropTypes.func.isRequired,
  onToggleArticleList: PropTypes.func.isRequired,
  openedArticleLists: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => {
  const {
    fetchedArticleLists,
    openedArticleLists,
  } = state.UI.Sidebar.ArticleLists;

  return {
    fetchedArticleLists,
    openedArticleLists,
  };
};

export default connect(mapStateToProps, {
  onFetchArticleLists: fetchArticleLists,
  onFetchArticles: fetchArticles,
  onToggleArticleList: toggleArticleList,
})(Sidebar);
