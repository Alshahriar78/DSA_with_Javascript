
// not done

const selectionSort = (arr) =>{
    
    for(let i = 0; i < arr.length -1;i++){
        let min =i;
        for(j=i+1; j <arr.length ; j++){

             if(arr[min] > arr[j] ){
                min = j; 
             }
             else if(min !=i){
                temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;

             }
        }
    }
    return arr;
}

console.log(selectionSort([40, 100, 1, 5, 25, 10]));
