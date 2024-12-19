// Question 2: Exploring JavaScript Operators

// Task 1: Declare variables to store two numeric values for performing arithmetic operations
let x;
let y;

// Task 2: Assign sample numeric values to the variables declared in Task 1
x = 1000;
y = 16;
console.log("Value for 'x':", x);
console.log("Value for 'y':", y);


// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let modulo = x % y;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Modulo:", modulo);

// Task 4: Explore assignment operators and update the values of variables
x = 2000;
y = 32;
console.log("New value for 'x':", x);
console.log("New value for 'y':", y);

// Task 5: Use comparison operators to compare the values of variables
console.log("Is the value of x equal to the value of y?", x == y);
console.log("Is x not equal to y?", x != y);
console.log("Is x greater than y?", x > y);
console.log("Is x lesser than y?", x < y);
console.log("Is the value and type of x equal to the value and type of y?", x === y);
console.log("Is x greater than or equal to y?", x >= y);
console.log("Is x lesser than or equal to y?", x <= y);
console.log("Is the value and type of x NOT equal to the value and type of y?(both)", x !== y);

// Task 6: Apply logical operators to combine conditions and display the results
if (x && y > 0) {
    isPositive = true;
}   else {
    isPositive = false;
}

if (x || y % 2) {
    isEven = true;
}   else {
    isEven = false;
}

console.log("Are both x and y positive numbers?", isPositive);
console.log("Is either x or y an even number?", isEven);