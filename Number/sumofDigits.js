const sumOfDigit=(number)=>{
    let copyNumber=number, sumNumber=0;
    while(copyNumber>0){
        let lastDigit=copyNumber%10;
        sumNumber+=lastDigit;
        copyNumber=Math.floor(copyNumber/10);
    }
    console.log(sumNumber)
    return sumNumber;
}

console.log(sumOfDigit(545));