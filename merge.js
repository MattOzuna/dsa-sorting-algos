function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let answer = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      answer.push(arr1[i]);
      i++;
    } else {
      answer.push(arr2[j]);
      j++;
    }
  }
  console.log(answer);

  while (i < arr1.length) {
    answer.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    answer.push(arr2[j]);
    j++;
  }
  return answer;
}

function mergeSort(arr) {
  //base case
  //returns arr when its length is 1 or 0
  //this is taking adavantage of the fact that a arr of 1 or 0 is sorted
  if (arr.length <= 1) return arr;
  //find mid point
  let mid = Math.floor(arr.length / 2);
  //recursive approach to each half
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
