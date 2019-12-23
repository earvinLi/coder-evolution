// External Dependencies
import React from 'react';

// Material-UI Dependen
// import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LooksOneRoundedIcon from '@material-ui/icons/LooksOneRounded';
import LooksTwoRoundedIcon from '@material-ui/icons/LooksTwoRounded';
import Looks3RoundedIcon from '@material-ui/icons/Looks3Rounded';
import Looks4RoundedIcon from '@material-ui/icons/Looks4Rounded';

// Component Definition
const Sidebar = () => {
  const ListItems = [
    { title: 'Week One', icon: <LooksOneRoundedIcon /> },
    { title: 'Week Two', icon: <LooksTwoRoundedIcon /> },
    { title: 'Week Three', icon: <Looks3RoundedIcon /> },
    { title: 'Week Four', icon: <Looks4RoundedIcon /> },
  ].map((listItem) => {
    const {
      icon,
      title,
    } = listItem;

    return (
      <ListItem button>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    );
  });

  return (
    <List>
      {ListItems}
    </List>
  );
};

export default Sidebar;
