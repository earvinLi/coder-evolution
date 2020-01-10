## Eloquent JavaScript

1. Polymorphism:
```
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
// → a black rabbit
```

## Testing

Unit Testing gives you the what. Test-Driven Development gives you the when. Behavior Driven-Development gives you the how.

```
// step 1 and 2: input, output and signature
var delayedFunction = debounce(targetFunction, delayInMilliseconds);

// step 3 and 4: one tiny aspect and implementation
describe('isPasswordStrong', function() {
  it('should give negative result for empty string', function() {
    var password = '';

    var result = isPasswordStrong(password);

    expect(result).to.be.false;
  });
});

// step 5: code
function debounce(targetFn, delay) {
  return function() {
    targetFn();
  };
}
```
