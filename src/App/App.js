// External Dependencies
import React from 'react';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import AppHeader from '../AppHeader/AppHeader';
import Article from '../ArticleDisplay/Article';
import getAppStyles from './AppStyle';
import Sidebar from '../Sidebar/Sidebar';


// Component Definition
const App = () => {
  const {
    appContainerStyle,
  } = makeStyles((theme) => getAppStyles(theme))();

  return (
    <>
      <AppHeader />
      <div className={appContainerStyle}>
        <Sidebar />
        <Article />
      </div>
    </>
  );
};

export default App;
