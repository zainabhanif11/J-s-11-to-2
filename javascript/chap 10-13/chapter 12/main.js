// Q1
// (function() {
//     console.log("Hello");
// })();

// Q2
// const sum = function(num1, num2) {
//     return num1 + num2;
// };

// console.log(sum(5, 10)); 

// Q3
// const numbers = [5, 2, 8, 1, 4];

// numbers.sort(function(a, b) {
//     return a - b; 
// });

// console.log(numbers); 

// Q4
// (function(name) {
//     console.log(`Hello, ${name}!`);
// })("Alice"); 

// Q5
// const checkEvenOdd = function(num) {
//     if (num % 2 === 0) {
//         console.log(`${num} is even.`);
//     } else {
//         console.log(`${num} is odd.`);
//     }
// };

// checkEvenOdd(7);  
// checkEvenOdd(10);

// Q6
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNumbers = numbers.filter(function(num) {
//     return num % 2 !== 0; 
// });

// console.log(oddNumbers); 

// Q7
// const factorial = function(n) {
//     if (n < 0) return undefined; 
//     if (n === 0 || n === 1) return 1;
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// };

// console.log(factorial(5)); 
// console.log(factorial(0)); 
// console.log(factorial(3));
// console.log(factorial(7)); 

// Q8
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0); 

// console.log(sum);

// Q9
// (function(age) {
//     if (age >= 18) {
//         console.log(`Age ${age}: Eligible to vote.`);
//     } else {
//         console.log(`Age ${age}: Not eligible to vote.`);
//     }
// })(20);
// (function(age) {
//     if (age >= 18) {
//         console.log(`Age ${age}: Eligible to vote.`);
//     } else {
//         console.log(`Age ${age}: Not eligible to vote.`);
//     }
// })(16); 

// (function(age) {
//     if (age >= 18) {
//         console.log(`Age ${age}: Eligible to vote.`);
//     } else {
//         console.log(`Age ${age}: Not eligible to vote.`);
//     }
// })(18); 





