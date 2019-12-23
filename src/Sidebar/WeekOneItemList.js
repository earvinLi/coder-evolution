// External Dependencies
import React from 'react';

// Material-UI Dependen
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Component Definition
const WeekOneItemList = () => {
  const ListItems = [
    { title: 'JavaScript Foundations' },
    { title: 'ES6 Features' },
  ].map((listItem) => {
    const {
      title,
    } = listItem;

    return (
      <ListItem
        button
        key={title}
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

export default WeekOneItemList;
