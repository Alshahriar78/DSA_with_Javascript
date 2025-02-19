//traversing with for loop
let arr = [40, 100, 1, 5, 25, 10];
for(let i = 0; i< arr.length; i++){
    console.log(arr[i]); // travelling and print all value;
}

function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
        
    }
    return true;
}

console.log(isPalindrome([1, 2, 3, 2, 1])); // Output: true
console.log(isPalindrome([1, 2, 3, 4, 5])); // Output: false