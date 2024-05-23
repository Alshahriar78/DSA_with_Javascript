let reverse = function(nums) {

    let copyReverseNumber=nums , reverseNumber=0;
    while(copyReverseNumber>0){
        let lastNumber=copyReverseNumber%10;
        reverseNumber=reverseNumber*10 + lastNumber;

        copyReverseNumber= Math.floor(copyReverseNumber/10);

    }

    return reverseNumber;
}

console.log(reverse(2345));