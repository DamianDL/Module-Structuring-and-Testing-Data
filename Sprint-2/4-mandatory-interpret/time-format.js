function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// The function pad will be called three times when formatTimeDisplay is called, once for each of; hours,  minutes, and  seconds.These are then passed as an argument to the pad function to ensure that they are displayed with two digits in the final output string.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num when pad is called for the first time is the totalHours value, which is 0. The value of 61 seconds is only one minute and one second, any value that includes hours must be in excess of 3600 seconds. 

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when it is called for the first time is "00". This is because the totalHours value is 0, and when it is converted to a string and passed to the pad function, it will be padded with a leading zero to ensure that it has two digits, resulting in "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when pad is called for the last time in this program is the remainingSeconds value, which is 1. This is because the input of 61 seconds results in 1 second remaining after accounting for the full minute.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//This value displayed with two digits in the final output string, resulting in "01".
