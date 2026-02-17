// Predict and explain first...
//  =============> write your prediction here
//The code will throw an error because the variable 'str' is being redeclared inside the function, which is not allowed in JavaScript. The error message will likely indicate that 'str' has already been declared.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
  //let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// =============> write your explanation here
//setup an new str variable inside the function called Newstr, which is assigned the value of the capitalised string. Then return Newstr instead of str to avoid the redeclaration error. Finally test using an assertion to check if the function is working as expected.
// =============> write your new code here
function capitalise(str) {
  let Newstr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return Newstr;
}
let str = "hello";
console.assert(capitalise(str) === "Hello");
