export default ((theme) => ({
  buttonStyle: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
  },
  buttonContainerStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  editorContainerStyle: {
    display: 'flex',
    flexGrow: 1,
    overflow: 'auto',
  },
  editorInputStyle: {
    flexGrow: 1,
    fontSize: 18,
    overflow: 'auto',
    width: '50%',
  },
  markdownViewerStyle: {
    width: '50%',
  },
  paperStyle: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    margin: theme.spacing(3),
    overflow: 'auto',
  },
}));
