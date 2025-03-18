let equalityArray=(arr1,arr2)=>{
    // if(arr1.length!==arr2.length){
    //     return false;
    // }
    // for(let i=0;i<arr1.length;i++){
    //     if (arr1[i]!==arr2[i]){
    //         return false;
    //     }
    // }
    // return true
    return arr1.length === arr2.length && arr1.every((ele,i)=> arr1[i]===arr2[i] )
}
console.log(equalityArray([1,2,3],[1,2,3]));