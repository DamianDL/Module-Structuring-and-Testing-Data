// trying to create an age variable and then reassign the value by 1

//const age = 33;
let age = 33;
age = age + 1;
console.log(age);

//problem: we cannot reassign a value to a variable that has been declared with "const". We can solve this problem by changing the declaration of the variable from "const" to "let", which allows us to reassign values to the variable. So I have commed line 3 and added line 4 to "let age = 33;". Also, I have added a line at the end to log the value of age to the console, so we can see the result of the reassignment to check that it is working correctly.