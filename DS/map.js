const map= new Map([["age",34],["name","Al Shahoriar"]]);

map.set('profession','Student')
map.delete('age')
console.log(map.get('profession'))
console.log(map.size)
for( const [keys,value] of map){
    console.log(`${keys}: ${ value}`) 
}
