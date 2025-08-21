let sortarr = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0]
    let left = []
    let right = []

    arr.forEach((element,index) => {
        if (index === 0) {
            return
        }
        if (element < pivot) {
           left.push(element) 
        }else{
            right.push(element)
        }
    })
    return [...sortarr(left),pivot,...sortarr(right)]
}







// 1. Write a program to implement binary search to find the index of a target element in a sorted array. 

// let arr = [6,5,7,8,2,9,5,4,1,3,4];

// let Binaryseraching = (arr, val) => {
//     let lower = 0;
//     let higher = arr.length - 1;

//     while (lower <= higher) {
//         let mid = Math.floor((lower + higher) / 2);
//         if (arr[mid] == val) {
//             return mid;
//         } else if (arr[mid] < val) {
//             lower = mid + 1;
//         } else {
//             higher = mid - 1;
//         }
//     }
//     return -1;  
// };



// let sorted = sortarr(arr);
// let index = Binaryseraching(sorted, 4);
// index != -1 ?  console.log(`Element at index:`, index) : console.log("Element Not Found")

// OUTPUT:
// Element at index: 3





// 2. write a program to find the first and last occurrence of a target element using the lower and upper bound methods. also return the count of occurrences.
     

//  let occurrence = (arr,val)=>{
//   let lowerBound = () => {
//     let low = 0, high = arr.length;
//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] < val) {
//             low = mid + 1;
//         } else {
//             high = mid;
//         }
//     }
//     return low; 
// };


//   let upperBound = () => {
//     let low = 0, high = arr.length;
//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] <= val) {
//             low = mid + 1;
//         } else {
//             high = mid;
//         }
//     }
//     return low; 
// };
  
//   let first = lowerBound();
//   let last = upperBound() ;
//   let count = (first < arr.length && arr[first] === val) ? (last - first ) : 0;

//   return { first, last, count };
//  }

// let arr = [2,5,4,2,7,5,1,3,4,2,6,9,8,7]
// let sorted = sortarr(arr)

// console.log(occurrence(sorted,2))
// console.log(`lower Bound is:${occurrence(sorted,2).first}`)
// console.log(`upper Bound is:${occurrence(sorted,2).last}`)
// console.log(`Count is:${occurrence(sorted,2).count}`)


// OUTPUT:
// lower Bound is:1
// upper Bound is:4
// Count is:3





// 3. Write a program to find the pivot index where the rotation occurs in a rotated sorted array. 

// let pivot = (arr) => {
//     let low = 0, high = arr.length - 1;

//     if (arr[low] <= arr[high]) {
//         return 0;
//     }
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] > arr[mid + 1]) {
//             return mid + 1;
//         }
//         if (arr[mid] < arr[mid - 1]) {
//            return mid;
//         }

//         if (arr[mid] >= arr[low]) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return 0; 
// };

// let arr = [7,8,9,1,2,3,4,5,6]

// console.log(`pivot Index Is:${pivot(arr)}`)

// OUTPUT:
// pivot Index Is:3