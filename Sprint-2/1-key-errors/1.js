// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//The code will throw an error because the variable 'decimalNumber' is being redeclared inside the function, which is not allowed in JavaScript. The error message will likely indicate that 'decimalNumber' has already been declared.
// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
// define a new variable called percentage that is assigned the value of the decimal number multiplied by 100 and concatenated with the percentage symbol. Then return the percentage variable instead of trying to redeclare the decimalNumber variable. Finally test using an assertion to check if the function is working as expected.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`; 
  return percentage;
} 
console.assert(convertToPercentage(0.5) === "50%");

