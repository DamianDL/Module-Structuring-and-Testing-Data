const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);


// convert number → string, then slice the last 4 chars
const last4 = cardNumber.toString().slice(-4);

console.log(last4); // "4213"

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
// cardNumber is a variable that holds a number, and numbers do not have a slice method. The slice method is used for strings and arrays, but not for numbers. To fix this error, we need to convert the cardNumber to a string before using the slice method. We can do this by using the toString() method on cardNumber, like this: cardNumber.toString().slice(-4). This will convert the number to a string and then allow us to use the slice method to get the last 4 digits.