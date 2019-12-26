// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependen
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Component Definition
const WeekOneItemList = (props) => {
  const { onSubitemClick } = props;

  const ListItems = [
    { articleName: 'javascript-foundations', title: 'JavaScript Foundations' },
    { articleName: 'es6-features', title: 'ES6 Features' },
  ].map((listItem) => {
    const {
      articleName,
      title,
    } = listItem;

    const onSubitemClickToUse = () => onSubitemClick(articleName);

    return (
      <ListItem
        button
        key={articleName}
        onClick={onSubitemClickToUse}
      >
        <ListItemText primary={title} />
      </ListItem>
    );
  });

  return (
    <List
      component="div"
    >
      {ListItems}
    </List>
  );
};

// Prop Validations
WeekOneItemList.propTypes = {
  onSubitemClick: PropTypes.func.isRequired,
};

export default WeekOneItemList;
