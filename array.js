
//best way to declare array
let daysOfWeek = ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

//use for loop to accessing every data of javascript
for(let i=0;i<=daysOfWeek.length;i++){
    console.log( `${daysOfWeek[i]}`);
}
//use for of to accessing every data of javascript
for(let items of daysOfWeek){
    console.log(`${items}`);
}


//if we need the array (its size), we can use the length  property
console.log(daysOfWeek.length);//length of the daysOfWeek array


let fibonacci = []; //{1}
fibonacci[1] = 1; //{2}
fibonacci[2] = 1; //{3}
for(let i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; ////{4}

}

for(var i = 1; i<fibonacci.length; i++){ //{5}
    console.log(i + ":" +fibonacci[i]); //{6}
}

// //Adding element in array using push()method
let numbersAdd = [0,1,2,3,4,5,6,7,8,9];
numbersAdd.push(10);
numbersAdd.push(12, 13);
console.log(numbersAdd)

//Adding element in the first position at array
for (var i=numbersAdd.length; i>=0; i--){
    numbersAdd[i] = numbersAdd[i-1];
}
numbersAdd[0] = 45;

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

//two dimensional array
var averageTempDay1 = [72,75,79,79,81,81];
var averageTempDay2 = [81,79,75,75,73,72];
var averageTemp = [];
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