
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
var numbers = [0,1,2,3,4,5,6,7,8,9];
numbers.push(10);
numbers.push(11);
numbers.push(12, 13);
console.log(numbers)

//Adding element in the first position at array
for (var i=numbers.length; i>=0; i--){
    numbers[i] = numbers[i-1];
}
numbers[0] = 45;

 numbers.unshift(47);//Adding element in the first position at array using unshift() method
// numbers.unshift(-4,)
console.log(numbers)