
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//function square(3) {
  //  return num * num;
//}

// =============> write the error message here
// SyntaxError: Unexpected number '3'
// =============> explain this error message here
// The error message is indicating that there is a syntax error in the code because we are trying to use a number '3' as a parameter name in the function declaration, which is not allowed in JavaScript. Parameter names must be valid identifiers, which cannot start with a number. To fix this error, we need to change the parameter name to a valid identifier, such as 'num' or 'x'. So we would change the line to: function square(num) { return num * num; }    

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}  
console.log(square(3));

