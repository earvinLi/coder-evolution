// External Dependencies
import React from 'react';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getDotsLoaderStyles from './styles/DotsLoaderStyle';

// Component Definition
const DotsLoader = () => {
  const {
    dotStyle,
    waveStyle,
  } = makeStyles((theme) => getDotsLoaderStyles(theme))();

  return (
    <div className={waveStyle}>
      <span className={dotStyle} />
      <span className={dotStyle} />
      <span className={dotStyle} />
    </div>
  );
};

export default DotsLoader;
