const bubleSort = (arr) => {
  // outer loop for itration 
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = 0;
    //inner loop for comparison to sort an array
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag++;
      }
    }
    if (flag == 0) {
      break;
    }
  }
  return arr;
};
console.log(bubleSort([40, 100, 1, 5, 25, 10]));
