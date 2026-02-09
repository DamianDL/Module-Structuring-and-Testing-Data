// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;
//problem: we cannot reassign a value to a variable that has been declared with "const". We can solve this problem by changing the declaration of the variable from "const" to "let", which allows us to reassign values to the variable. So we would change the first line to "let age = 33;".
