// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependencies
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getContentLoadingScreenStyles from './styles/ContentLoadingScreenStyle';

// Component Definition
const ContentLoadingScreen = (props) => {
  const {
    imageStyle,
    paperStyle,
  } = makeStyles((theme) => getContentLoadingScreenStyles(theme))();

  const { loadingContent } = props;

  return (
    <Paper className={paperStyle}>
      <img
        alt="a cute cat loading spinner"
        className={imageStyle}
        src="https://i.pinimg.com/originals/8f/0e/0b/8f0e0bc17919d7f791480ac893ec132b.gif"
        style={{ height: 400, width: 384 }}
      />
      <Typography variant="h4">
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
