const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program. They are: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.
// b) How many function calls are there?
// There are 2 function calls in this program. They are: the template literal function call when assigning a value to the result variable (line 9) and the console.log function call on  line 10.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60. This gives us the number of seconds that are left over after converting the total seconds into minutes. Movilength is 146 minutes and 24 seconds, so the remaining seconds is 24.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression (movieLength - remainingSeconds) / 60 calculates the total number of minutes in the movie, excluding the remaining seconds, based on the movilength (8784s)so the calculation is; (8784-24)/60 = 146 minutes. 


// e) What do you think the variable result represents? Can you think of a better name for this variable?

// The variable result is the length of the movie in hours, minutes, and seconds. A better name for this variable could be movieDurationhms, as it more clearly indicates that it is the duration of the movie in hours, minutes, and seconds.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Movie length will work for all integers, based it it being a real movie and therefore non negative and the timing device only able to measure whole seconds. If movieLength is not an integer (e.g., a floating-point number), the calculations may yield unexpected results due to the way JavaScript handles division and modulus operations with non-integer values.
