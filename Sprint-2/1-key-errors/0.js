// Predict and explain first...
//  =============> write your prediction here
// The code will throw an error because the variable 'str' is being redeclared inside the function 'capitalise'. The error message is likely to be a syntax error.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
 // let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// =============> write your explanation here
// The error is occurring because we are trying to declare a variable 'str' inside the function that has the same name as the parameter 'str'.To fix this problem,  create an variable with a new name Newstr . So we would change the line to: Newstr = `${str[0].toUpperCase()}${str.slice(1)}`;
// =============> write your new code here
function capitalise(str) {
  let Newstr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return Newstr;
} 
str="hello world";
console.log(capitalise(str)); 
