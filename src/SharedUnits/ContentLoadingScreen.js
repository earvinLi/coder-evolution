// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependencies
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getContentLoadingScreenStyles from './styles/ContentLoadingScreenStyle';

// Component Definition
const ContentLoadingScreen = (props) => {
  const {
    iconStyle,
    paperStyle,
  } = makeStyles((theme) => getContentLoadingScreenStyles(theme))();

  const { loadingContent } = props;

  return (
    <Paper className={paperStyle}>
      <DescriptionOutlinedIcon className={iconStyle} />
      <Typography variant="h3">
        Loading&nbsp;
        {loadingContent}
        :)
      </Typography>
    </Paper>
  );
};

// Prop Validations
ContentLoadingScreen.propTypes = {
  loadingContent: PropTypes.string,
};

ContentLoadingScreen.defaultProps = {
  loadingContent: '',
};

export default ContentLoadingScreen;
