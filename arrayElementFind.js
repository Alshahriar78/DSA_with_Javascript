//
let arrayElementFind=(arr,target)=>{
    for(let i=0;i<arr.length;i++){

        if(arr[i]===target){
            return i;

        }
    }
    return false
}
console.log(arrayElementFind([1,2,3,4,5,6,7,8,9,10],6))
