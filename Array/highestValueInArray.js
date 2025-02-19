const highestValueInArray=(arr)=>{
    let maxValue = arr [0];
    for(let i = 0; i < arr.length ; i++){
        if(maxValue < arr[i]){
            maxValue = arr[i];
        }
    }
    return maxValue;
}

console.log(highestValueInArray([40, 100, 1, 5, 25, 10]))