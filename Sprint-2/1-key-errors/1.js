// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// The error will occur because we are trying to declare a variable with the same name as the parameter of the function. The error message will likely indicate that there is a syntax error or that the variable 'str' has already been declared.

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
// }

//console.log(decimalNumber);

// =============> write your explanation here
// The error is occurring because we are trying to declare a variable 'decimalNumber' inside the function that has the same name as the parameter 'decimalNumber'. To fix this problem, we can different variable name for the parameter or the variable inside the function. For example, we could change the line to: const decimalNum = 0.5; and then use 'decimalNum' instead of 'decimalNumber' in the rest of the function.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const decimalNum = 0.5;
  const percentage = `${decimalNum * 100}%`;
  return percentage;
}
console.log(convertToPercentage(0.5));
