function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i];

      for (let j = i; j > 0; j--) {
        if (temp >= arr[j - 1]) {
          arr[j] = temp;
          break;
        } else {
          arr[j] = arr[j - 1];
          arr[j-1] = temp;
        }
      }
    }
  }

  return arr;
}

module.exports = insertionSort;
