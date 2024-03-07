function sumOfInteger(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
    // Space complexity {O(1) which is too good}
} // this function time complexity {O(n)} ---> that means linear time complexity
console.log(sumOfInteger(10));

function sumOfInteger2(n){
     return n*(n+1)/2;
    }// this function time complexity {O(1)} ---> that means Constant time complexity

console.log(sumOfInteger2(10));

function sum(arr1){
    let total=0;
    for(let i=0;i<arr1.length;i++) {
        total += arr1[i];

    }//space complexity {O(1)} time complexity O(n)
    return total;
}
console.log("The Array element Sum is: "+sum([1,2,3,4,66]));

function double(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
} // Space complexity {O(n)} & Time Complexity {O(n2)}
console.log(double([2,3,4]));

function uniqueName(arr){
    let uniqueName=[];
    for(let i=0;i<arr.length;i++){
        let ele=arr[i];
        if(!uniqueName.includes(ele)){
            uniqueName.push(ele);
        }
    }
    return uniqueName;
}//Space complexity {O(n)} & Time Complexity {O(n2)}
let name=["Al Shahoriar","Saurov","Hossain","Bubly","Abid","Saurov",'Al Shahoriar','Shaon','Othoi'];
console.log(uniqueName(name));


function  logarithmsN(n){
    while(n>1){
        console.log(n);
        n/=2;
    }
    console.log("Done");
}

logarithmsN(9);

function anotherLogarithmsN(n){
    if (n<=1){
        console.log("Done")
        return;
    }
    console.log(n);
    anotherLogarithmsN(n/2);
}

anotherLogarithmsN(12);