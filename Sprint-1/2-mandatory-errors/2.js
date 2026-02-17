// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
//const cityOfBirth = "Bolton";
//problem: we are trying to use the variable "cityOfBirth" before it has been declared and assigned a value. In JavaScript, variables declared with "const" or "let"  cannot be accessed before they are declared. To fix this error, we need to declare and assign a value to "cityOfBirth" before we try to use it. So we would move the line "const cityOfBirth = "Bolton";" above the console.log statement.