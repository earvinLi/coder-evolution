const SCRIPTS = require('./Scripts');

/* eslint-disable no-restricted-syntax */
const countBy = (items, groupName) => {
  const counts = [];
  for (const item of items) {
    const name = groupName(item);
    const known = counts.findIndex((count) => count.name === name);
    if (known === -1) counts.push({ name, count: 1 });
    else counts[known].count += 1;
  }
  return counts;
};

const characterScript = (code) => {
  for (const script of SCRIPTS) {
    if (script.ranges.some(([startPoint, endPoint]) => code >= startPoint && code < endPoint)) {
      return script;
    }
  }
  return null;
};

const dominentWritingDirection = (text) => {
  const scripts = countBy(text, (char) => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name !== 'none');

  const total = scripts.reduce((n, { count }) => n + count, 0);
  if (total === 0) return 'No scripts found!';

  const directionText = (script) => (script.name === 'ltr' ? 'Left to Right' : 'Right to Left');
  return `
    The dominent writing direction of the text is
    '${scripts[1] && scripts[0].count < scripts[1].count ? directionText(scripts[1]) : directionText(scripts[0])}'.
  `;
};

console.log(dominentWritingDirection('Hey, مساء الخير'));
console.log(dominentWritingDirection('You can use this page to download source code and solutions to exercises for the book Eloquent JavaScript, and to directly run code in the context of chapters from that book, either to solve exercises to simply play around.'));
