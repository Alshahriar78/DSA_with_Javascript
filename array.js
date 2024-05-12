
//best way to declare array
let daysOfWeek = ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

//use for loop to accessing every data of javascript
console.log("use for loop to accessing every data of javascript Array:")
for(let i=0;i<=daysOfWeek.length;i++){

    console.log( `${daysOfWeek[i]}`);
}
//use for of to accessing every data of javascript
console.log("for of to accessing every data of javascript Array:::")
for(let items of daysOfWeek){
    console.log(`${items}`);
}


//if we need the array (its size), we can use the length  property
console.log("we can use the length  property for the array (its size)::")
console.log(daysOfWeek.length);//length of the daysOfWeek array




// //Adding element in array using push()method
console.log("Adding element in array using push()method::")
let numbersAdd = [0,1,2,3,4,5,6,7,8,9];
numbersAdd.push(10);
numbersAdd.push(12, 13);
console.log(numbersAdd)

//Adding element in the first position at array
console.log("Adding element in the first position at array::")
for (var i=numbersAdd.length; i>=0; i--){
    numbersAdd[i] = numbersAdd[i-1];
}
numbersAdd[0] = 45;
console.log(numbersAdd);

console.log("Adding element in the first position at array Using unshift() method::")
numbersAdd.unshift(47);//Adding element in the first position at array using unshift() method
// numbers.unshift(-4,)
console.log(numbersAdd)

// adding element with splice() method
numbersAdd.splice(5,0,2,3,4);
console.log("After using Splice() method the new array:")
console.log(numbersAdd);

//Removing element using pop() method
let numberRemove=[3,5,67,9,34,667,8,78,4,5,7]
numberRemove.pop();
console.log(numberRemove);

//Removing an element from first position using shift() method


numberRemove.shift();
numberRemove.shift();
console.log(numberRemove);

//<---------Adding and removing elements from a specific position using splice() method----------->

let arraySplice=[2,34,56,57,67,89,8,6876,68,76];
arraySplice.splice(5,3);//remove three elements, starting from index 5 of our array.
// This means the numbers [5],numbers [6], and numbers [7] will be removed from the numbers array.
console.log(arraySplice);
//splice(), pop(), or
// shift () methods to remove elements.

//<----------------adding element middle of the array-------------------->
console.log("arrayIndexCheck:")
let arrayIndexCheck=[2,3,4,5,6,7,8,9,10,13,41,34,56,78];

 arrayIndexCheck[arrayIndexCheck.length/2-1]=255
console.log(arrayIndexCheck);

//two-dimensional array
let averageTempDay1 = [72,75,79,79,81,81];
let averageTempDay2 = [81,79,75,75,73,72];
let averageTemp = [];
averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];

//accessing element in two dimensional array
function printMatrix(myMatrix){
    for(let i=0;i<myMatrix.length;i++){
        for (let j=0;j<myMatrix[i].length;j++){
            console.log(myMatrix[i][j])
        }
    }
}
printMatrix(averageTemp);// call function to output array


//Array concat Method()
// this concat method join two array a store a new variable
console.log("this concat method join two array a store a new variable")
let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];

let result=primeNumbers.concat(evenNumbers);
console.log(result);




console.log(" Array sort() Method:")
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//method toString() converts an array to a string of (comma separated) array values.
console.log(fruits.toString());

//join() method also joins all array elements into a string.
//
// It behaves just like toString(), but in addition you can specify the separator

console.log(fruits.join('*'));
//Array Iteration

console.log("Array Iteration")
const numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);

function myFunction(value, index, array) {
    console.log(value);// returns array al elements like a loops
    console.log(index);// returns array index numbers
    console.log(array);
}

// array map method()
console.log("Map of Method of Array")
let numbersMap = [2, 4, 6, 8, 10];
numbersMap.map((value, index, array)=>{
    console.log(value);// returns array al elements like a loops
    console.log(index);// returns array index numbers
    console.log(array);
})

// filter() method that's filter array different condition
console.log("Filter Method")
const numbersFilter = [45, 4, 9, 16, 25];

const over18 = numbersFilter.filter((value,index,array)=>{
    return value>5;
});
console.log(over18);
// reduce() method runs a function on
// each array element to produce (reduce it to) a single value.
const numbersReduce = [45, 4, 9, 16, 25];
let sum = numbersReduce.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total +value ;
}
console.log(sum);
