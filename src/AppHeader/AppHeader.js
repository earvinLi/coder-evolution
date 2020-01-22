// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

// Internal Dependencies
import { openArticleAddDialog } from '../Article/actions/ArticleAddDialogAction';

// Component Definition
const AppHeader = (props) => {
  const {
    articleEditorIsOpen,
    onOpenArticleAddDialog,
  } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Coder Evolution</Typography>
        <div style={{ flexGrow: 1 }} />
        {!articleEditorIsOpen && (
          <Tooltip title="Add Article">
            <IconButton
              aria-label="add article"
              color="inherit"
              edge="end"
              onClick={onOpenArticleAddDialog}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Account">
          <IconButton
            aria-label="account of current user"
            color="inherit"
            edge="end"
          >
            <AccountCircleIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

// Prop Validations
AppHeader.propTypes = {
  articleEditorIsOpen: PropTypes.bool.isRequired,
  onOpenArticleAddDialog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { isOpen: articleEditorIsOpen } = state.Article.ArticleEditor;

  return { articleEditorIsOpen };
};

export default connect(mapStateToProps, {
  onOpenArticleAddDialog: openArticleAddDialog,
})(AppHeader);
