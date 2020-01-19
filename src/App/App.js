// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import AppHeader from '../AppHeader/AppHeader';
import Article from '../Article/Article';
import ArticleAddDialog from '../Article/ArticleAddDialog';
import getAppStyles from './styles/AppStyle';
import Sidebar from '../Sidebar/Sidebar';
import WelcomePage from './WelcomePage';

// Component Definition
const App = (props) => {
  const {
    appContainerStyle,
  } = makeStyles((theme) => getAppStyles(theme))();

  const {
    articleAddDialogIsOpen,
    articleEditorIsOpen,
    currentArticle,
  } = props;

  return (
    <>
      <AppHeader />
      <div className={appContainerStyle}>
        {!articleEditorIsOpen && <Sidebar />}
        {!currentArticle ? <WelcomePage /> : <Article />}
        {articleAddDialogIsOpen && <ArticleAddDialog />}
      </div>
    </>
  );
};

// Prop Validations
App.propTypes = {
  articleAddDialogIsOpen: PropTypes.bool.isRequired,
  articleEditorIsOpen: PropTypes.bool.isRequired,
  currentArticle: PropTypes.string,
};

App.defaultProps = {
  currentArticle: '',
};

const mapStateToProps = (state) => {
  const { currentArticle } = state.UI.Sidebar.Articles;
  const { isOpen: articleEditorIsOpen } = state.Article.ArticleEditor;
  const { isOpen: articleAddDialogIsOpen } = state.Article.ArticleAddDialog;

  return {
    articleAddDialogIsOpen,
    articleEditorIsOpen,
    currentArticle,
  };
};

export default connect(mapStateToProps, null)(App);
