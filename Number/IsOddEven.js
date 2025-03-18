// roblem Statement
// Write a program that checks if a number entered by the user is even or odd.

// Input
// The input consists of a integer.


function IsOddEven(input) {
    /**
     * Write JavaScript code from here
     */
    let number = input.split(' ')
    let num1= parseInt(number);
    if(num1 % 2 == 0){
        console.log(`${num1} is an even number.`)
    }else{
        console.log(`${num1} is an odd number.`)
    }
    
}

IsOddEven('45')