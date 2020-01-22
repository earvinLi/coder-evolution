// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

// Internal Dependencies
import TooltippedButton from '../SharedUnits/TooltippedButton';
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
          <TooltippedButton
            ariaLabel="add article"
            icon={<AddIcon />}
            onClick={onOpenArticleAddDialog}
            tooltip="Add Article"
          />
        )}
        <TooltippedButton
          ariaLabel="account of current user"
          icon={<AccountCircleIcon />}
          onClick={() => {}}
          tooltip="Account"
        />
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
