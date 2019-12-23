// External Dependencies
import React from 'react';

// Internal Dependencies
import AppHeader from '../AppHeader/AppHeader';
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay';
import Sidebar from '../Sidebar/Sidebar';

// Component Definition
const App = () => (
  <>
    <AppHeader />
    <Sidebar />
    <ArticleDisplay />
  </>
);

export default App;
