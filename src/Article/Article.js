// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

// Internal Dependencies
import ArticleDisplay from './ArticleDisplay';
import ArticleEditor from './ArticleEditor';

// Component Definition
const Article = (props) => {
  const { articleEditorIsOpen } = props;

  return articleEditorIsOpen ? <ArticleEditor /> : <ArticleDisplay />;
};

// Prop Validations
Article.propTypes = {
  articleEditorIsOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { isOpen: articleEditorIsOpen } = state.Article.ArticleEditor;

  return { articleEditorIsOpen };
};

export default connect(mapStateToProps, null)(Article);
