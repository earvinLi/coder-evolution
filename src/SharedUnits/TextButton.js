// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependencies
import Typography from '@material-ui/core/Typography';

// Component Definition
const TextButton = (props) => {
  const {
    children,
    onClick,
  } = props;

  return (
    <Typography
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
  children: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TextButton;
