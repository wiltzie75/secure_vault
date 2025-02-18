// 1. Create three let variables that will each calculate the 3 numbers of the combo using various operators.
// 2. Created a constant variable that will let the end user know what the alert is about.
// 3. Setup an alert that displays the comb which is taken from the three variables using string interpolation.



// Assigned three variables that each equal one of the combo numbers.
let num1 = 2 * 5;
let num2 = 20 + 20;
let num3 = 50 - 11;

// Assigned a variable with a message that lets the user know what the alert is.
const mess = "You have received this message because you have chosen to open an important vault.  Here is the secret combination:";

// Created a alert message that displays the combo, which is the thre variables from above.
alert(`${mess} ${num1}-${num2}-${num3}`);