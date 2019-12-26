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

---

1. Finished Introduction and Chapter 2 Program Structure.
2. I need to finish more on Clean Code. I need to finish more on Clean Code.
