// External Dependencies
import React from 'react';

// Material-Ui Dependencies
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getWelcomePageStyles from './styles/WelcomePageStyle';
import MarkdownViewer from '../SharedUnits/MarkdownViewer';

// Component Definition
const WelcomePage = () => {
  const {
    paperStyle,
  } = makeStyles((theme) => getWelcomePageStyles(theme))();

  // eslint-disable-next-line
  const welcomeText = `# Welcome to Coder Evolution\n\n_Coder Evolution is a platform for helping keep track of your technology learning progresses._\n\n**With Coder Evolution, you can:**\n- Add, view and edit your article\n- Manage and organize your articles\n\n**Motivation and story behind Coder Evolution (if you are interested):**\n\nAs coders, we probably have to read official documentations, from [Stack Overflow](https://stackoverflow.com/) or so every day. This can be because we happen to have to solve a specific problem or this is just the way a coder evolves. How could coders save ideas that pop up during this solving and learning process? Coder Evolution provides a service that makes it easy for coders to edit, preview and save [Markdown Texts](https://www.markdownguide.org/) where their great ideas live.\n\n---\n\nCoded with 🍺 by [Earvin Li](https://github.com/earvinLi)`;

  return (
    <Paper className={paperStyle}>
      <MarkdownViewer
        markdownText={welcomeText}
      />
    </Paper>
  );
};

export default WelcomePage;
