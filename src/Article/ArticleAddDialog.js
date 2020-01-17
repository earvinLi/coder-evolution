// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getArticleAddDialogStyles from './styles/ArticleAddDialogStyle';
import TextButton from '../SharedUnits/TextButton';
import {
  closeArticleAddDialog,
} from './actions/ArticleAddDialogAction';

// Component Definition
const ArticleAddDialog = (props) => {
  const {
    articleSelectContainerStyle,
  } = makeStyles((theme) => getArticleAddDialogStyles(theme))();

  const {
    articleAddDialogIsOpen,
    onCloseArticleAddDialog,
  } = props;

  const onAddButtonClick = () => {};
  const onArticleListSelectChange = () => {};
  const onSwitchButtonClick = () => {};

  return (
    <Dialog
      onClose={onCloseArticleAddDialog}
      open={articleAddDialogIsOpen}
    >
      <DialogTitle>Add Article</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add an article, please click ADD after you typed a name of your article.
          Please also select or create a list where your article will live.
        </DialogContentText>
        <TextField
          fullWidth
          label="Article Name"
          type="text"
        />
        <div className={articleSelectContainerStyle}>
          <InputLabel id="article-list-select">
            Article List
          </InputLabel>
          <Select
            fullWidth
            labelId="article-list-select"
            onChange={onArticleListSelectChange}
          >
            <MenuItem>Core Skills</MenuItem>
          </Select>
        </div>
        <TextButton onClick={onSwitchButtonClick}>
          Or you want to create a new list?
        </TextButton>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={onCloseArticleAddDialog}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={onAddButtonClick}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Prop Validations
ArticleAddDialog.propTypes = {
  articleAddDialogIsOpen: PropTypes.bool.isRequired,
  onCloseArticleAddDialog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    isOpen: articleAddDialogIsOpen,
  } = state.Article.ArticleAddDialog;

  return {
    articleAddDialogIsOpen,
  };
};

export default connect(mapStateToProps, {
  onCloseArticleAddDialog: closeArticleAddDialog,
})(ArticleAddDialog);
