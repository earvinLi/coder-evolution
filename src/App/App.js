// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import AppHeader from '../AppHeader/AppHeader';
import Article from '../Article/Article';
import getAppStyles from './AppStyle';
import Sidebar from '../Sidebar/Sidebar';


// Component Definition
const App = (props) => {
  const {
    appContainerStyle,
  } = makeStyles((theme) => getAppStyles(theme))();

  const { articleEditorIsOpen } = props;

  return (
    <>
      <AppHeader />
      <div className={appContainerStyle}>
        {!articleEditorIsOpen && <Sidebar />}
        <Article />
      </div>
    </>
  );
};

// Prop Validations
App.propTypes = {
  articleEditorIsOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { isOpen: articleEditorIsOpen } = state.Article.ArticleEditor;

  return { articleEditorIsOpen };
};

export default connect(mapStateToProps, null)(App);
