let temperature=[2,4,5,7,8,9,-2 ,"error",-4,-9,18];
function getHighestandLowestValueandAddThem(arr){
    //create a variable for pic the highest value;
    let highest=arr[0];
    //create a variable for pic the lowest value;
    let lowest=arr[0];
     //iterating whole array
    for (let i=0;i<arr.length;i++){

        if(typeof arr[i]!=="number")continue;

        if (highest<arr[i]){
            highest=arr[i];
        }
        if (lowest>arr[i]){
            lowest=arr[i];
        }
    }
    return highest-lowest;
}
console.log(getHighestandLowestValueandAddThem(temperature));


//Char Count

function charCount(str){
    let charList={};
    for (i=0;i<str.length;i++){
        let char=str[i].toLowerCase();
        if(charList[char] > 0){
            charList[char]++
        }else {
            charList[char]=1;
        }
    }
    return charList;
}
console.log(charCount("Al Shahoriar Rahman Saurov"));


function doubleArray(arr1,arr2){
    if (arr1.length!==arr2.length){
        return false;
    }
    for (let i=0;i<arr1.length;i++){
        let currentIndex= arr2.indexOf(arr1[i]**2);
        if(currentIndex==-1){
            return false
        }
        arr2.splice(currentIndex,1);

    }
    return true;
}
console.log(doubleArray([2,4,6],[36,16,4]))