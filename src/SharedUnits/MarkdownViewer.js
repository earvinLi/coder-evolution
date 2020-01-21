// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getMarkdownViewerStyles from './styles/MarkdownViewerStyle';
import markedEngine from '../App/RootUtilities/MarkedEngine';

// Component Definition
const MarkdownViewer = (props) => {
  const {
    articleContainerStyle,
  } = makeStyles((theme) => getMarkdownViewerStyles(theme))();

  const {
    markdownText,
    variantStyle,
  } = props;

  const markedText = markedEngine(markdownText);

  return (
    <div
      className={`${articleContainerStyle} ${variantStyle}`}
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: markedText }}
    />
  );
};

// Prop Validations
MarkdownViewer.propTypes = {
  markdownText: PropTypes.string.isRequired,
  variantStyle: PropTypes.string,
};

MarkdownViewer.defaultProps = {
  variantStyle: '',
};

export default MarkdownViewer;
