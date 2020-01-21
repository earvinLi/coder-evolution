// External Dependencies
import highlightjs from 'highlight.js';
import marked, { Renderer } from 'marked';

const escapeForHTML = (input) => {
  const escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return input.replace(/[&<>'"]/g, (char) => escapeMap[char]);
};

const renderer = new Renderer();
renderer.code = (code, language) => {
  const languageToUse = language || 'js';
  const validLang = !!highlightjs.getLanguage(languageToUse);

  const highlighted = validLang
    ? highlightjs.highlight(languageToUse, code).value
    : escapeForHTML(code);

  // TODO: Understand why multiple lines doesn't work here
  return `<pre><code class="hljs hljs-extended ${language}">${highlighted}</code></pre>`;
};

marked.setOptions({
  breaks: true,
  gfm: true,
  renderer,
});
export default marked;
