// External Dependencies
import marked from 'marked';
import React, { useState } from 'react';

// Material-UI Dependencies
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import getArticleDisplayStyles from './styles/ArticleDisplayStyle';

// Component Definition
const ArticleDisplay = () => {
  const [inputText, setInputText] = useState('# Week 1');
  const {
    paperStyle,
  } = makeStyles((theme) => getArticleDisplayStyles(theme))();

  const markedText = marked(inputText);

  return (
    <Paper className={paperStyle}>
      <TextareaAutosize
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
      />
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: markedText }} />
    </Paper>
  );
};

export default ArticleDisplay;
