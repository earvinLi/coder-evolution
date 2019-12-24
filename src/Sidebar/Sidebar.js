// External Dependencies
import PropTypes from 'prop-types';
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
import { toggleWeekItemList } from '../UI/SidebarUI/actions/SidebarUIAction';

// Component Definition
const Sidebar = (props) => {
  const {
    collapseStyle,
    listStyle,
  } = makeStyles((theme) => getSidebarStyles(theme))();

  const {
    onToggleWeekItemList,
    weekItemListIsOpen,
  } = props;

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
        <ListItem
          button
          onClick={() => onToggleWeekItemList(title)}
        >
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
        <Collapse
          className={collapseStyle}
          in={weekItemListIsOpen.includes(title)}
          timeout="auto"
          unmountOnExit
        >
          {itemList}
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
  onToggleWeekItemList: PropTypes.func.isRequired,
  weekItemListIsOpen: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => {
  const { weekItemListIsOpen } = state.UI.Sidebar;

  return { weekItemListIsOpen };
};

export default connect(mapStateToProps, {
  onToggleWeekItemList: toggleWeekItemList,
})(Sidebar);
