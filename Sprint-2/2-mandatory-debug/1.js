// Predict and explain first...
//  =============> write your prediction here
// The code will throw an error because the function 'sum' does not return a value, so when it is called inside the template literal, it will return undefined. The error message will likely indicate that the result of adding 10 and 32 is undefined or that it cannot be used in a string context.
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//
// Finally, correct the code to fix the problem
//  =============> write your new code here
