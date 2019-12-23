// External Dependencies
import React from 'react';

// Material-UI Dependencies
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

// Component Definition
const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Coder Evolution</Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
