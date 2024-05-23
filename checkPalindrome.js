let isPalindrome = function(x) {
    let copyNum=x, reverseNum=0;
    while(copyNum>0){
        let reminder =copyNum%10;
        reverseNum=reverseNum*10 + reminder;
        console.log(reverseNum);
        copyNum= Math.floor(copyNum/10);
    }
    return x === reverseNum;
};
console.log(isPalindrome(121));