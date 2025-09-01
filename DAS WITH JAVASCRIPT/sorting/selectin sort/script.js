let arr = [100, 30, 5, 8, 88]

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] > arr[j]) {
            let n = arr[i];
            arr[i] = arr[j];
            arr[j] = n;
        }

    }
}
console.log(arr);










let arr2 = [100, 30, 5, 8, 88];

let selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap smallest with arr[i]
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

    console.log(`Pass ${i + 1}: [${arr.join(", ")}]`);
  }
  console.log("Final Sorted (Selection):", arr);
};

selectionSort([...arr2]);  // copy array

