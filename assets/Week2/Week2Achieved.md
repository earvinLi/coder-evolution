# Week2

### Walked through [React Doc](https://reactjs.org/docs) and key takeaways are:

1. JSX represents objects:
**Babel compiled:**
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
**React create element:**
```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
**Created element:**
```
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

2. State updates may be asynchronous:
**Wrong state and props calculation:**
```
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
**Correct one:**
```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

3. this and e:
**es6 binding and React synthetic event**
```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
```
**es5 binding and React synthetic event**
```
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

4. Every HTML form control, such as `<input />` and `<textarea />`, needs to be labeled accessibly. The `for` attribute is written as `htmlFor` in JSX. For focus management, check [`react-aria-modal`](https://github.com/davidtheclark/react-aria-modal). [Mouse and pointer events example](https://reactjs.org/docs/accessibility.html#mouse-and-pointer-events) is very good. [Other points for consideration](https://reactjs.org/docs/accessibility.html#other-points-for-consideration) is also very useful, e.g. [react-document-title](https://github.com/gaearon/react-document-title). Testing with a screen reader should form part of your accessibility tests.

5. Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app:
```
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Suspense>
    </MyErrorBoundary>
  </Router>
);
```

6. Context:
```
// ThemeContext is imported
<ThemeContext.Consumer>
  // {theme, toggleTheme} is from Provider's value
  // which is App's state (same shape as the default context value)
  {({theme, toggleTheme}) => (
    <button
      onClick={toggleTheme}
      style={{backgroundColor: theme.background}}>
      Toggle Theme
    </button>
  )}
</ThemeContext.Consumer>
```
If two or more context values are often used together, you might want to consider creating your own render prop component that provides both.

7. It is worse to leave corrupted UI in place than to completely remove it. Check [the demo](https://codepen.io/gaearon/pen/wqvxGa?editors=0010) for using `<ErrorBoundary />` with the help of `getDerivedStateFromError()` and `componentDidCatch()`. We also encourage you to use JS error reporting services (or build your own) so that you can learn about unhandled exceptions as they happen in production, and fix them.

---

1. Finished Introduction and Chapter 2 Program Structure.
2. I need to finish more on Clean Code. I need to finish more on Clean Code.
