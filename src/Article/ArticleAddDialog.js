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
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getArticleAddDialogStyles from './styles/ArticleAddDialogStyle';
import TextButton from '../SharedUnits/TextButton';
import {
  addArticle,
  closeArticleAddDialog,
  toggleArticleListActionMode,
  updateArticleAddInfo,
} from './actions/ArticleAddDialogAction';

// Component Definition
const ArticleAddDialog = (props) => {
  const {
    articleSelectContainerStyle,
  } = makeStyles((theme) => getArticleAddDialogStyles(theme))();

  const {
    articleAddDialogIsOpen,
    articleList,
    articleName,
    fetchedArticleLists,
    onAddArticle,
    onCloseArticleAddDialog,
    onToggleArticleListActionMode,
    onUpdateArticleAddInfo,
    toSelectArticleList,
  } = props;

  const onArticleNameInputChange = (e) => onUpdateArticleAddInfo('articleName', e.target.value);
  const onArticleListInputChange = (e) => onUpdateArticleAddInfo('articleList', e.target.value);

  const articleListItems = fetchedArticleLists.map((articleListItem) => (
    <MenuItem
      key={articleListItem}
      value={articleListItem}
    >
      {articleListItem}
    </MenuItem>
  ));

  const articleListSection = toSelectArticleList
    ? (
      <FormControl
        className={articleSelectContainerStyle}
        fullWidth
      >
        <InputLabel id="article-list-select">
          Article List
        </InputLabel>
        <Select
          labelId="article-list-select"
          onChange={onArticleListInputChange}
          value={articleList}
        >
          {articleListItems}
        </Select>
      </FormControl>
    )
    : (
      <TextField
        className={articleSelectContainerStyle}
        fullWidth
        label="Article List"
        onChange={onArticleListInputChange}
        type="text"
        value={articleList}
      />
    );

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
          onChange={onArticleNameInputChange}
          type="text"
          value={articleName}
        />
        {articleListSection}
        <TextButton onClick={onToggleArticleListActionMode}>
          {toSelectArticleList
            ? 'Or you want to create a new list?'
            : 'You can select from an existing list.'}
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
          onClick={onAddArticle}
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
  articleList: PropTypes.string,
  articleName: PropTypes.string,
  fetchedArticleLists: PropTypes.arrayOf(PropTypes.string),
  onAddArticle: PropTypes.func.isRequired,
  onCloseArticleAddDialog: PropTypes.func.isRequired,
  onToggleArticleListActionMode: PropTypes.func.isRequired,
  onUpdateArticleAddInfo: PropTypes.func.isRequired,
  toSelectArticleList: PropTypes.bool.isRequired,
};

ArticleAddDialog.defaultProps = {
  articleList: '',
  articleName: '',
  fetchedArticleLists: [],
};

const mapStateToProps = (state) => {
  const {
    articleList,
    articleName,
    isOpen: articleAddDialogIsOpen,
    toSelectArticleList,
  } = state.Article.ArticleAddDialog;
  const { fetchedArticleLists } = state.UI.Sidebar.ArticleLists;

  return {
    articleAddDialogIsOpen,
    articleList,
    articleName,
    fetchedArticleLists,
    toSelectArticleList,
  };
};

export default connect(mapStateToProps, {
  onAddArticle: addArticle,
  onCloseArticleAddDialog: closeArticleAddDialog,
  onToggleArticleListActionMode: toggleArticleListActionMode,
  onUpdateArticleAddInfo: updateArticleAddInfo,
})(ArticleAddDialog);
