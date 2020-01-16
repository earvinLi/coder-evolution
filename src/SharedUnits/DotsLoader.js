// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getDotsLoaderStyles from './styles/DotsLoaderStyle';

// Component Definition
const DotsLoader = (props) => {
  const {
    dotStyle,
    waveStyle,
  } = makeStyles((theme) => getDotsLoaderStyles(theme))();

  const {
    variantDotStyle,
    variantWaveStyle,
  } = props;

  return (
    // TODO: Change to enable style overriding
    <div className={`${waveStyle} ${variantWaveStyle}`}>
      <span className={`${dotStyle} ${variantDotStyle}`} />
      <span className={`${dotStyle} ${variantDotStyle}`} />
      <span className={`${dotStyle} ${variantDotStyle}`} />
    </div>
  );
};

// Prop Validations
DotsLoader.propTypes = {
  variantDotStyle: PropTypes.string,
  variantWaveStyle: PropTypes.string,
};

DotsLoader.defaultProps = {
  variantDotStyle: '',
  variantWaveStyle: '',
};

export default DotsLoader;
