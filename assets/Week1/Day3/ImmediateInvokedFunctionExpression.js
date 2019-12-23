const testArr = [10, 12, 15, 21];

for (var i = 0; i < testArr.length; i++) {
  setTimeout(function() {
    // console.log(i);
    // console.log(new Date());
    console.log(`The value ${testArr[i]} is at index: ${i}.`);
  }, (i+1) * 1000);
}
// Results:
// The value undefined is at index: 4.
// The value undefined is at index: 4.
// The value undefined is at index: 4.
// The value undefined is at index: 4.
// Reason is all four function calls with timeout use the same global variable whose value is generated after the whole loop completes. For the last loop, `i` becomes `4`, but we only have four calls. The timeout value is always the same which is set by the first loop.

for (let i = 0; i < testArr.length; i++) {
  setTimeout(function() {
    console.log(`The value ${testArr[i]} is at index: ${i}.`);
  }, (i+1) * 1000);
}
// Results:
// The value 10 is at index: 0.
// The value 12 is at index: 1.
// The value 15 is at index: 2.
// The value 21 is at index: 3.
// Solution is we change to use `let` instead of `var`, which enables each function call with timeout use its own local variable.

for (let i = 0; i < testArr.length; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(`The value ${testArr[j]} is at index: ${j}.`);
    }, j * 1000);
  })(i);
}
// Works for the same reason but by implementing immediate invoked function expression.

// Some other interesting tries:

// Still closure thing
let i;
for (i = 0; i < testArr.length; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(`The value ${testArr[j]} is at index: ${j}.`);
    }, j * 1000);
  })(i);
}

// Overthinking that the location of a valiable might cause this issue
for (let obj = { i: 0 }; obj.i < testArr.length; obj.i++) {
  setTimeout(function() {
    console.log(`The value ${testArr[obj.i]} is at index: ${obj.i}.`);
  }, obj.i * 1000);
}
