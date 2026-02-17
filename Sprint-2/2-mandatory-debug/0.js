// Predict and explain first...

// =============> write your prediction here
// The code will throw an error because the function 'multiply' does not return a value, so when it is called inside the template literal, it will return undefined. The error message will likely indicate that the result of multiplying 10 and 32 is undefined or that it cannot be used in a string context.
//function multiply(a, b) {
  //console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function 'multiply' is defined to take two parameters, 'a' and 'b', and it logs the product of 'a' and 'b' to the console. However, it does not return any value, which means that when it is called inside the template literal, it will return undefined. This is why we get an error when trying to use the result of the multiplication in a string context.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);  