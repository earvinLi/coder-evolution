// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependencies
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getTextButtonStyles from './styles/TextButtonStyle';

// Component Definition
const TextButton = (props) => {
  const {
    typographyStyle,
  } = makeStyles((theme) => getTextButtonStyles(theme))();

  const {
    children,
    onClick,
  } = props;

  return (
    <Typography
      className={typographyStyle}
      color="primary"
      onClick={onClick}
      variant="body2"
    >
      {children}
    </Typography>
  );
};

// Prop Validations
TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TextButton;
