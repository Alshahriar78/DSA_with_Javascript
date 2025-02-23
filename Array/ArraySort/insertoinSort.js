const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > temp) {  // condition checking and swapping
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

console.log(insertionSort([40, 100, 1, 5, 25, 10]));