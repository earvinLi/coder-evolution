// External Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LooksOneRoundedIcon from '@material-ui/icons/LooksOneRounded';
import LooksTwoRoundedIcon from '@material-ui/icons/LooksTwoRounded';
import Looks3RoundedIcon from '@material-ui/icons/Looks3Rounded';
import Looks4RoundedIcon from '@material-ui/icons/Looks4Rounded';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import WeekOneItemList from './WeekOneItemList';
import getSidebarStyles from './styles/SidebarStyle';

// Component Definition
const Sidebar = () => {
  const {
    collapseStyle,
  } = makeStyles((theme) => getSidebarStyles(theme))();

  const ListItems = [
    { title: 'Week One', icon: <LooksOneRoundedIcon />, itemList: <WeekOneItemList /> },
    { title: 'Week Two', icon: <LooksTwoRoundedIcon />, itemList: '' },
    { title: 'Week Three', icon: <Looks3RoundedIcon />, itemList: '' },
    { title: 'Week Four', icon: <Looks4RoundedIcon />, itemList: '' },
  ].map((listItem) => {
    const {
      icon,
      itemList,
      title,
    } = listItem;

    return (
      <div key={title}>
        <ListItem button>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
        <Collapse
          className={collapseStyle}
          in
          timeout="auto"
          unmountOnExit
        >
          {itemList}
        </Collapse>
      </div>
    );
  });

  return (
    <List>
      {ListItems}
    </List>
  );
};

const mapStateToProps = (state) => {
  // TODO: Use one variable to control the visibilities of all four lists
  const {
    weekOneItemListIsOpen,
    weekTwoItemListIsOpen,
    weekThreeItemListIsOpen,
    weekFourItemListIsOpen,
  } = state.UI.Sidebar;

  return {
    weekOneItemListIsOpen,
    weekTwoItemListIsOpen,
    weekThreeItemListIsOpen,
    weekFourItemListIsOpen,
  };
};

export default connect(mapStateToProps, {})(Sidebar);
