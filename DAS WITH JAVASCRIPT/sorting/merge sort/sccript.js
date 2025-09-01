function mergeSort(arr) {
  if (arr.length <= 1) return arr;  // base case

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));


  
  // merging part inside the same function
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr = [10, 12, 19, 15, 20, 25, 9];
console.log("One-function Merge Sort:", mergeSort(arr));


