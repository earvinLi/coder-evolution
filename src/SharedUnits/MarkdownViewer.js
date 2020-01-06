// External Dependencies
import PropTypes from 'prop-types';
import marked from 'marked';
import React from 'react';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getMarkdownViewerStyles from './styles/MarkdownViewerStyle';

// Component Definition
const MarkdownViewer = (props) => {
  const {
    articleContainerStyle,
  } = makeStyles((theme) => getMarkdownViewerStyles(theme))();

  const {
    markdownText,
    variantStyle,
  } = props;

  const markedText = marked(markdownText);

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
