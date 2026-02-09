let carPrice = "10,000";
let priceAfterOneYear = "8,543";

//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

carPrice = Number(carPrice.replaceAll(",",""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 3 function calls in this file. They are on lines 4, 5, and 10. The function calls are: two uses of replaceAll,and one console.log.
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming from lines 4 and 5 (which I have commed out). The error is occurring because there is a space between the comma and the closing quotation mark in the second argument of the replaceAll function. This causes the function to look for a comma followed by a space, which does not exist in the string. To fix this problem, have removed the space between the comma and the closing quotation mark in both lines, on lines 7&8.

// c) Identify all the lines that are variable reassignment statements
// The variable reassignment statements are on lines 7 and 8, where carPrice and priceAfterOneYear are being reassigned to the result of the replaceAll function calls.

// d) Identify all the lines that are variable declarations
// The variable declarations are on lines 1, 2, 11 and 12. They are: carPrice, priceAfterOneYear, priceDifference, and percentageChange.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
  // The expression Number(carPrice.replaceAll(",","")) is first using the replaceAll function to remove all commas from the carPrice string, resulting in a string of digits. Then, the Number function is converting that string of digits into a numerical value. The purpose of this expression is to convert the carPrice from a formatted string (with commas) into a number that can be used for calculations.