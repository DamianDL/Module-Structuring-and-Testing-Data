const minimum = 1;
const maximum = 100;


const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);



// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Num generates a random number 0-0.9999999999999999, then multiplies it by (100-1+1=100), which gives a number between 0 and 99.99999999999999. Then it adds 1, which gives a number between 1 and 100. Finally, it uses Math.floor to round down to the nearest whole number, giving a final result of a random integer between 1 and 100 (inclusive).