# Week2

### Walked through [React Doc](https://reactjs.org/docs) and key takeaways are:

1. JSX represents objects:
```
// Babel compiled
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
// React create element:
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
// Created element (simplified):
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

2. State updates may be asynchronous:
```
// Wrong state and props calculation
this.setState({
  counter: this.state.counter + this.props.increment,
});
// Correct one
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

3. this and e:
```
// es6 binding and React synthetic event
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// es5 binding and React synthetic event
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

8. Refs forwarding:
```
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    render() {
      const {forwardedRef, ...rest} = this.props;
      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }
  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }
  // DevTools will see the display name of forwardRef
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;
  return React.forwardRef(forwardRef);
}
```

9. `<React.Fragment />` can have a `key` prop that is also the only prop it supports, which is very helpful when rendering a list of elements, but `<></>` cannot have anything.

10. HOC:
Multiple HOCs:
```
// Instead of doing this...
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))
// ... you can use a function composition utility
// compose(f, g, h) is the same as (...args) => f(g(h(...args)))
// which could be imported from lodash.flowRight, Redux and Ramda
const enhance = compose(
  // These are both single-argument HOCs
  withRouter,
  connect(commentSelector)
)
const EnhancedComponent = enhance(WrappedComponent)
```
Pass all non-React static methods down:
```
import hoistNonReactStatic from 'hoist-non-react-statics';
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
}
```

11. Other Libraries:
jQuery:
```
class SomePlugin extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.somePlugin();
  }
  componentWillUnmount() {
    this.$el.somePlugin('destroy');
  }
  render() {
    return <div ref={el => this.el = el} />;
  }
}
```
Backbone:
Components responsible for rendering models would listen to 'change' events, while components responsible for rendering collections would listen for 'add' and 'remove' events. In both cases, call this.forceUpdate() to rerender the component with the new data.

12. For optimizing performance, check [React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) and [React Virtualized](https://bvaughn.github.io/react-virtualized/#/components/List).
```
// class CounterButton extends React.PureComponent
shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) return true;
    if (this.state.count !== nextState.count) return true;
    return false;
  }
```

13. `ReactDOM.createPortal(child, container)` The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

14. Profiler:
```
// const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => console.log(...);
<Profiler id="Navigation" onRender={callback}>
  <Navigation {...props} />
</Profiler>
```

15. The [Mixins](https://reactjs.org/docs/react-without-es6.html#mixins) discussion is under React Without ES6 section.

16. React's Reconciliation: two elements of different types will produce different trees and The developer can hint at which child elements may be stable across different renders with a key prop.

17. Refs and the Dom:
```
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}
class Parent extends React.Component {
  render() {
    return (
      // CustomTextInput will have the input's ref
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}
```

18. Render Props:
```
// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
function withMouse(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => (
          <WrappedComponent {...this.props} mouse={mouse} />
        )}/>
      );
    }
  }
}
```

19. Check [Flow](https://flow.org/en/docs/getting-started/) for static type checking.

20. `<React.StrictMode />` currently helps with identifying components with unsafe lifecycles, warning about legacy string ref API usage, warning about deprecated findDOMNode usage, detecting unexpected side effects and detecting legacy context API.

21. PropTypes:
```
// custom validator
customProp: function(props, propName, componentName) {
  if (!/matchme/.test(props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
},
// custom validator for 'arrayOf' and 'objectOf'
customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
  if (!/matchme/.test(propValue[key])) {
    return new Error(
      'Invalid prop `' + propFullName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
}),
```
With `PropTypes.element` you can specify that only a single child can be passed to a component as children.

22. In React, an `<input type="file" />` is always an uncontrolled component because its value can only be set by a user, and not programmatically.

23. Most people who use React don’t use [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), but you may want to, especially if you are using third-party UI components that are written using Web Components.

---

1. Finished Introduction, Chapter 2 Program Structure and Chapter3 Functions.
2. I need to finish more on Clean Code. I need to finish more on Clean Code.
