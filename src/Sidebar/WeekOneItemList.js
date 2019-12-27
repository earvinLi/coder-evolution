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
import { openArticleDisplay } from '../UI/SidebarUI/actions/SidebarUIAction';

// Component Definition
const WeekOneItemList = (props) => {
  const {
    subitemSelectedStyle,
  } = makeStyles((theme) => getweekOneItemListStyles(theme))();

  const {
    currentArticle,
    onOpenArticleDisplay,
  } = props;

  const ListItems = [
    { articleName: 'javascript-foundations', title: 'JavaScript Foundations' },
    { articleName: 'es6-features', title: 'ES6 Features' },
  ].map((listItem) => {
    const {
      articleName,
      title,
    } = listItem;

    const onSubitemClick = () => onOpenArticleDisplay(articleName);

    return (
      <ListItem
        button
        className={clsx(articleName === currentArticle && subitemSelectedStyle)}
        key={articleName}
        onClick={onSubitemClick}
      >
        <ListItemText primary={title} />
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
  currentArticle: PropTypes.string.isRequired,
  onOpenArticleDisplay: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { currentArticle } = state.UI.Sidebar;

  return { currentArticle };
};

export default connect(mapStateToProps, {
  onOpenArticleDisplay: openArticleDisplay,
})(WeekOneItemList);
