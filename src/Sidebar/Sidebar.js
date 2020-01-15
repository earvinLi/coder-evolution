// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import WeekOneItemList from './WeekOneItemList';
import getSidebarStyles from './styles/SidebarStyle';
import {
  fetchArticleLists,
  toggleWeekItemList,
} from '../UI/SidebarUI/actions/SidebarUIAction';

// Component Definition
const Sidebar = (props) => {
  const {
    collapseStyle,
    listStyle,
  } = makeStyles((theme) => getSidebarStyles(theme))();

  const {
    fetchedArticleLists,
    onFetchArticleLists,
    // onToggleWeekItemList,
    // weekItemListIsOpen,
  } = props;

  useEffect(() => {
    onFetchArticleLists();
  }, [onFetchArticleLists]);

  const ListItems = fetchedArticleLists.map((articleList) => {
    // const sublistIsOpen = weekItemListIsOpen.includes(title);
    // const onWeekListClick = () => onToggleWeekItemList(title);

    return (
      <div key={articleList}>
        <ListItem
          button
          // onClick={onWeekListClick}
        >
          <ListItemText primary={articleList} />
          {/* sublistIsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon /> */}
        </ListItem>
        {/* <Collapse
          className={collapseStyle}
          in={sublistIsOpen}
          timeout="auto"
          unmountOnExit
        >
          {itemList}
        </Collapse> */}
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
  onToggleWeekItemList: PropTypes.func.isRequired,
  weekItemListIsOpen: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => {
  const {
    fetchedArticleLists,
    weekItemListIsOpen,
  } = state.UI.Sidebar;

  return {
    fetchedArticleLists,
    weekItemListIsOpen,
  };
};

export default connect(mapStateToProps, {
  onFetchArticleLists: fetchArticleLists,
  onToggleWeekItemList: toggleWeekItemList,
})(Sidebar);
