
let  fib = function(n) {

    if(n<2){
        return n;
    }
    let next, previous=0, current=1;

        for(i=2;i<=n;i++){
            next=previous+current;
            previous=current
            current=next;
        }
        return next;


};
console.log(fib(7));