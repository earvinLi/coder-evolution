# Week 1

### Walked through all ES6 features by reading [this article](https://www.freecodecamp.org/news/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e/). And here are some key takeaways:

1. Array destructuring:
```
const numbers = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) => a + b + c + d + e
const sum = sum(...numbers)
```

2. '[for...of...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)' and '[for...in...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)' could be pretty handy.

3. promise can race~:
```
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one')
})
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two')
})

Promise.race([promiseOne, promiseTwo]).then(result => {
  console.log(result) // 'two'
})
```

4. Any script loaded with `type = ‘module’` is loaded in strict mode.

5. `./` or `/` is always needed when using ‘import … from …'.

6. Using `charCodeAt()` you need to retrieve the first, and the second, and combine them, but using `codePointAt()` you get the whole character in one call:
```
"𠮷".charCodeAt(0).toString(16) // d842
"𠮷".charCodeAt(1).toString(16) // dfb7
"\ud842\udfb7" //"𠮷"

"𠮷".codePointAt(0) // 20bb7
"\u{20bb7}" //"𠮷"
```

7. React use `Object.is()` to help `useEffect` work with conditions inside the `[]`. `Object.assign()` helps shallow copy an object.

8. Weird situations you’ll almost never find in real life：
```
console.log(new Map().set(NaN, ’test’).get(NaN)); // test
console.log(new Map().set(+0, ’test’).get(-0)); // test
```

9. For a Weak Map, mainly you cannot iterate over the keys or values, cannot clear all its items and connot check its size.

10. Generator:
```
function *calculator(input) {
    var doubleThat = 2 * (yield (input / 2))
    var another = yield (doubleThat)
    return (input * doubleThat * another)
}

const calc = calculator(10);
console.log(calc.next()); // { done: false, value: 5 }
console.log(calc.next(7)); // { done: false, value: 14 }
console.log(calc.next(100)); // { done: true, value: 14000 }
```

11. `Math.pow(4, 2) == 4 ** 2`

12. `'test'.padStart(8, 'abcd') // abcdtest` and `'test'.padEnd(8, 'abcd') // testabcd`

13. `Object.assign()` doesn't copy non-default attributes, but `Object.getOwnPropertyDescriptors()` can help:
```
const person1 = {
    set name(newName) {
        console.log(newName)
    }
};

const person2 = {};
Object.assign(person2, person1); // person2 will not do the console.log()

const person3 = Object.defineProperties(person3, Object.getOwnPropertyDescriptors(person1)); // person3 has the console.log()
```

14. [Shared Memory and Atomics](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)

15. 'for await...of...' allows you to use an async iterable object as the loop iteration which could only be used under `async` functions like normal `await`, e.g. `for await (const line of readLines(filePath)) console.log(line);`.

16. `Promise.prototype.finally()` allows to run some code besides either `then` or `catch`.

17. [Improvements of Regex](https://flaviocopes.com/javascript-regular-expressions/)

### Read [this article](https://www.freecodecamp.org/news/the-definitive-javascript-handbook-for-a-developer-interview-44ffc6aeb54e/) to get a quick review of all key facts of JavaScript. Some takeaways are:

1. Tricky coercisons:
```
"-9\n" + 5 = "-9\n5"
"-9\n" - 5 = -14
"4px" - 2 = NaN
null + 1 = 1
undefined + 1 = NaN
```

2. `==` checks for equality with coercion and `===` checks for equality without coercion — strict equality, e.g. `undefined == null` or `'0' == false`. Found the cheat sheet of JavaScript comparisons [here](https://dorey.github.io/JavaScript-Equality-Table/) which could help a lot when doing React conditional renderings. Always use 3 equals unless you have a good reason to use 2.

3. Function declarations are completely hoisted. Function expressions are not hoisted. `let` and `const` are not hoisted.

4. An undeclared variable — assignment without `var`, `let` or `const` — creates a `var` variable in global scope. `let` and `const` are blocked by curly braces.

5. Some interesting practice about closure and IIFE. Found the code [here](https://github.com/earvinLi/coder-evolution/blob/master/Week1/Day3/ImmediateInvokedFunctionExpression.js).

6. Context is most often determined by how a function is invoked. It always refers to the value of this in a particular part of your code. Scope refers to the visibility of variables.

7. `char.knows.call(Snow, ...["nothing", "Jon"]);`

8. Review [a bit](https://github.com/earvinLi/coder-evolution/blob/master/Week1/Day3/ThisToy.js) about `this` in ES5 and ES6. Will keep updating with different cases.

9. `new` under the hood:
```
const myNew = (constructor, ...arguments) => {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, arguments) || obj;
}
```

10. `.prototype`, `.__proto__` and `.constructor`:
```
function Dog(breed, name){
  this.breed = breed,
  this.name = name
}
Dog.prototype.describe = function() {
  console.log(`${this.name} is a ${this.breed}`)
}
const rusty = new Dog('Beagle', 'Rusty');

/* .prototype property points to an object which has constructor and attached
properties to be inherited by objects created by this constructor. */
console.log(Dog.prototype)  // { describe: ƒ , constructor: ƒ }

/* Object created from Dog constructor function */
console.log(rusty)   //  { breed: "Beagle", name: "Rusty" }
/* Object inherited properties from constructor function's prototype */
console.log(rusty.describe())   // "Rusty is a Beagle"
/* .__proto__ property points to the .prototype property of the constructor function */
console.log(rusty.__proto__)    // { describe: ƒ , constructor: ƒ }
/* .constructor property points to the constructor of the object */
console.log(rusty.constructor)  // ƒ Dog(breed, name) { ... }
```

11. `Object.create()` keeps the reference while `Object.assign()` doesn't.

12. The time you pass in to setTimeout function does not relate to the delay of its execution. The Event Manager will wait the given time before moving that function into the Callback Queue. The Call Stack is constantly checked whether it is empty or not. When it is empty, the Callback Queue is checked if there is a function waiting to be invoked. When there is a function waiting, the first function in the queue is pushed into the Call Stack, which will run it. This checking process is called a ‘tick’ in the Event Loop.

---
1. Found [Eloquent JavaScript](https://eloquentjavascript.net/). Finished Introduction and Chapter 1 Values, Types and Operators.
2. I need to finish more on Clean Code.
