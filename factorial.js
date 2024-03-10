function recursive(n){
    let number;
    if(n>1){
        number = n*(n-1);
        recursive(n-2);
        console.log(number)
    }
    return number ;
}
console.log(recursive(5));