export default ((theme) => ({
  dotStyle: {
    animationName: '$wave',
    animationDuration: '1.3s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    backgroundColor: 'grey',
    borderRadius: '50%',
    display: 'inline-block',
    height: 5,
    marginRight: 3,
    width: 5,
    '&:nth-child(2)': {
      animationDelay: '-1.1s',
    },
    '&:nth-child(3)': {
      animationDelay: '-0.9s',
    },
  },
  waveStyle: {
    height: theme.spacing(3),
    position: 'relative',
    textAlign: 'center',
    width: theme.spacing(3),
  },
  '@keyframes wave': {
    '0%, 60%, 100%': {
      transform: 'initial',
    },
    '30%': {
      transform: 'translateY(-15px)',
    },
  },
}));
