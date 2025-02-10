
//Opearation for DSA
let arr=[1,2];
 let min = arr[0];
for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
         min =arr[i];
         minIndex=i;
    }
}
let minIndex= arr.indexOf(min);
let max = arr[minIndex];
for(let i=minIndex; i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}

let maxProfit= max-min;
    if (maxProfit > 0) {
        console.log(maxProfit);
    } else {
        return 0;
    }

