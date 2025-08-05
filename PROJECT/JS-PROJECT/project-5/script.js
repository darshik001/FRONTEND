
// 1 Write a simple JavaScript program to print expected Output using the following array. 


// let mycolor = ["Red","Green","White","Black"]
//                                                           // OUTPUT 

// console.log(mycolor.join(","));                  // Red,Green,White,Black
// console.log(mycolor.join("+"));                  // Red+Gree+White+Black          
// console.log(mycolor.slice(0,3).join(","));       // Red,Green,White
// console.log(mycolor[0])                          // Red
// console.log(mycolor.slice(1,3).join(","))        // Green,White
// mycolor.push("Orange")                
// console.log(mycolor.join(","));                  // Red,Green,White,Black,Orange




// 2.Write a JavaScript program to get the sum of all array elements using for loop and foreach loop. 

// let num = [10,20,30,40,50];

//using for loop
// let sum = 0;
// for(let i = 0;i<num.length;i++){
//   sum +=num[i];
// }
// console.log("Sum Of Array is:",sum)

// OUTPUT
// Sum of Array is:150



// using forEach 
// let sum = 0;
// num.forEach(element => {
//        sum +=element
// });

// console.log("Sum Of Array is:",sum)

// OUTPUT
// Sum of Array is:150




// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic) 

  // let num = [23,45,56,54,67,78,90,12,24,15,7]

  // let finde = (arr)=>{
  // let max = arr[0];
  // let min = arr[0];
  
  //  for(let i = 1; i < arr.length;i++){
  //        if(arr[i] > max){
  //          max = arr[i];
  //        }

  //        if(arr[i] < min){
  //          min =  arr[i];
  //        }
        
  //  }
  //  console.log("Max Number is:",max);
  //  console.log("Min Number is:",min);
  // }
  // finde(num)


  // OUTPUT
    // Max Number is:90
    // Min Number is:7



    // 4.Write a JavaScript program to convert all array elements into ASCII values. 

    // let arr = ['A', 'b', 'C', 'D',"B"]
    // let ascii = [];
    // for(let i = 0;i<arr.length;i++){
    //     ascii.push(arr[i].charCodeAt())
    // }
    // console.log(ascii)


    // OUTPUT 
    // [65, 98, 67, 68, 66]



    // 5.Write a JavaScript program to remove negative values using the filter array function.

// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20]; 
    // let positivenumber = numbers.filter((element)=> element >0)
    //    console.log(positivenumber)


      // OUTPUT 
      // [1,5,12,19,20];



// 6. Write a JavaScript program using array map() method and return the square of the array element. 

// let arr = [2, 5, 6, 3, 8, 9]; 

// let arr2 =  arr.map((ele)=>ele**2)
// console.log(arr2)


// OUTPUT 
//  [4, 25, 36, 9, 64, 81]



// 7.Write a JavaScript program for sorting an array in ascending descending. 

// let numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20]; 
// let myColor = ["Red", "Green", "White", "Black"]; 

                                                            // OUTPUT 
                                                    //  ascending:        
// console.log(numbers.sort((x,y)=> x-y))              //  [0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23]
// console.log(myColor.sort())                         //  ['Black', 'Green', 'Red', 'White']

//                                                    // descending
// console.log(numbers.sort((x,y)=> x-y).reverse())   // [23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0]
// console.log(myColor.sort().reverse())              // ['White', 'Red', 'Green', 'Black']





// 8. Write a JavaScript program which filters out any string which is less than 8 characters.

// let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']; 

// let less8 =   words.filter((ele)=>ele.length<8)
// console.log(less8)
  
      // OUTPUT 
      //  ['Python', 'Go', 'Java', 'PHP', 'Ruby']




      // 9. write a JavaScript program to print expected output for the following string. 


// let x="airplane";
// console.log(x[2])  

//  OUTPUT: r 



// let x = "oxoxoxox"; 
// let char = '';
//       for(let i = 0;i<x.length;i++){
//         if(i%2==1){
//           char +=  x[i].toUpperCase()
//         }else{
//           char+=x[i]  
//         }
//       }
//       console.log(char)
   // OUTPUT:- "oXoXoXoX" 


  // let  x= "A New Java Book"; 
  // console.log(x.toLowerCase());     // a new java book  
  // console.log(x.toUpperCase());     //"A NEW JAVA BOOK" 

  // 10. write a JavaScript program for array reverse. 


  // let arr = [12,34,56,3,23,56,87,86,1,2,7,8,10];

  // console.log(arr.reverse())    //[10, 8, 7, 2, 1, 86, 87, 56, 23, 3, 56, 34, 12]




  // 11. write a JavaScript program to check if a value is found or not? 


  // let arr = [12,34,56,3,23,56,87,86,1,2,7,8,10];

  //      let u_input = Number(prompt("Enter Number to Finde Number"));

        //  let finde = arr.includes(u_input)
        //  if(finde==true){
        //   console.log(`${u_input} is found`)
        //  }else{
        //   console.log(`${u_input} is not found`)
        //  }


// OUTPUT 
//  u_input = 23 
//  then   print 23 is found 

// 12. write a JavaScript program to print your name and write the number of total characters. 


// let myname = "darshikbhai jentibhai shekhada"
//  myname  = myname.trim().split(" ").join("");
// console.log(`my name langht is: ${myname.length}`)

// OUTPUT 
// my name langht is: 7



// 13. write a JavaScript program given this output using replace concept. 

// let per =  "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning"; 

// let result =   per.replaceAll("dog","cat")
//   console.log(result)

// OUTPUT: 
// "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning" 
             


// 14. write a JavaScript program convert string to array. 

// let pera =  "Hire the top 1% freelance developers"; 
//      let result = pera.split(" ",4)
//      console.log(result)

// OUTPUT:
//  ["Hire", "the", "top", "1%"] 



// 15. write a JavaScript program to convert an array to string. 
// let arr =  ['5', 32, 'Daniel']; 

// console.log(arr.join(","))

// OUTPUT:
// // 5,32, Daniel 
       


