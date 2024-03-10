const set= new Set([1,2,3,4,4,5]);

set.delete(2);


for (let i of set){
    set.add(6);
 console.log(i);

}
console.log(set.has(6))