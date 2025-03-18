// Problem Statement
// Write a program that calculates and prints the sum of two numbers entered by the user.

// Input
// The input consists of two integers.

function main(input) {
  /**
   * Write JavaScript code from here
   */

  let number = input.split(" ");
  let num1 = parseInt(number[0]);
  let num2 = parseInt(number[1]);
  return num1 + num2;
}

console.log(main("3 5"));