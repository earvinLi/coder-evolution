export default ((theme) => ({
  buttonStyle: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
  },
  buttonContainerStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  paperStyle: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    margin: theme.spacing(3),
    overflow: 'auto',
  },
}));
