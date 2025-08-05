

// 1. Write a JAVASCRIPT Program to display the multiplication table of a given integer using a while loop. 

// let user_input = Number(prompt("Enter Number To Print Table"));

// let i = 1;
// while(i<=10){
//   console.log(user_input + " * " + i + " = " + user_input * i);
//   i++;
// }



//   OUTPUT
//   user_input = 5
//   THEN PRINT 
//   5 * 1 = 5
//   5 * 2 = 10
//   5 * 3 = 15
//   5 * 4 = 20
//   5 * 5 = 25
//   5 * 6 = 30
//   5 * 7 = 35
//   5 * 8 = 40
//   5 * 9 = 45
//   5 * 10 = 50



// 2. Write a JAVASCRIPT Program to calculate the factorial of a given number using a while loop. 

//  let user_input = Number(prompt("Enter Number To Calculate Factorial Number"));
//  let factorial = 1;
//  let i = 1;
//   while(i<=user_input){
//     factorial = factorial *i;
//     i++;
//   }
//    console.log("factorial Is A:",factorial);



//   OUTPUT
//   user_input = 5;
//   then  print 
//   factorial number:= 120



//  3. Write a JAVASCRIPT Program to find the Armstrong number list of a given number using a do while loop. 

//    let digit = 153;
//    let number = digit;
//    let count = 0;
//   let sum = 0;

//    while(digit!=0){
//      digit =  Math.floor(digit/10);
//      count++;
//    }
//    digit = number;
// do{
//     let power = number%10;
//     sum +=power**count;
//     number = Math.floor(number/10);
// } while(number!=0);

//     if(digit==sum){
//       console.log(digit + " Is A Armstrong Number");
//     }else{
//       console.log(digit + " Is A Not Armstrong Number");
//     }



//   OUTPUT 
//   number = 8208
//   then print 
//   8208 Is A Armstrong Number



// 4. Write a JAVASCRIPT Program to find the Palindrome number list of a given number using a while loop. 

//  let number = 124;
//  let digit = number;
//  let str="";

//  while(number!=0){
//     str+=number%10;
//     number = Math.floor(number/10);
//  }

//    if(digit == str){
//     console.log(digit+" Is A Palindrome Number");
//    }else{
//     console.log(digit+" Is A Not Palindrome Number");
//    }


//   OUTPUT 
//   number = 1221
//   then print
//   1221 Is A Palindrome Number 



// 5. Write a JAVASCRIPT Program to calculate the Fibonacci Series of a given number using a while loop. 

//   let i = 1
//   let n=Number(prompt("Enter number"));
//   let x=0;
//   let y=1,z;

//   while(i<=n){
//    console.log(x);
//     z = y;
//     y=x;
//     x = y+z;
//     i++;
// }



//   OUTPUT
//   n = 5;
//   then print
//   0 1 1 2 3  




// 6. Write a JAVASCRIPT Program to add all the integers between 0 and 30 and display the total using do while loop 

    // let i = 1;
    // let sum  = 0;
    // do{
    //  sum +=i;
    //  i++;
    // } while(i<=30);
    // console.log("1 To 30 Sum Is:",sum);


    //   OUTPUT   
    //   1 To 30 Sum Is: 465



// 7. Write a JAVASCRIPT Program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" using do while loop. 

// let i = 1;
//  do{
//      if(i%3==0 && i%5 ==0){
//       console.log("FizzBuzz");
//      } else if(i%3==0){
//       console.log("Fizz");
//      } else if(i%5==0){
//       console.log("Buzz");
//      } else{
//       console.log(i);
//      }
//  i++;
//  } while(i<=100);


//   OUTPUT 
//   0 1 2 Fizz 4 Buzz Fizz ....13 14 FizzBuzz...




// 8. Write a JAVASCRIPT Program that displays 1-2-3-4-5-6-7-8-9-10 on one line using a for loop. There will be no hyphen(-) at starting and ending position 


      //  let str = ""
      //  for(let i = 1;i<=10;i++){
      //        str+= i
      //        if(i<10){
      //         str += "-";
      //        }
      //  }
      //  console.log(str)



      // OUTPUT
      // 1-2-3-4-5-6-7-8-9-10



// 9. Write a JAVASCRIPT Program that displays 1+4+9+16+ +100=385 on one line using a for loop 

        //  let sum = 0;
        //  let str = "";
        //  let n = Number(prompt("Enter Number"));
         
        //  for (let i = 1; i <= n; i++) {
        //    sum += i * i;
        //    str += i * i
        //    if (i < n) {
        //      str += " + ";
        //    } else {
        //      str += " = " + sum;
        //      console.log(str);
        //    }
        //  }


        //    OUTPUT
        //    n = 10
        //    1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385


// 10. Write a JAVASCRIPT Program that displays below pattern using nested for loop 
                                      // 5 
                                      // 5 4 
                                      // 5 4 3 
                                      // 5 4 3 2 
                                      // 5 4 3 2 1 
    
      //  let i,j;


      //  for(i=5 ;i>0 ; i--){
      //   let str ="";
      //       for(j=5;j>=i;j--){
      //           str+= j + " "
      //       }
      //       console.log(str);
      //  }

      // OUTPUT
      // 5 
      // 5 4 
      // 5 4 3 
      // 5 4 3 2 
      // 5 4 3 2 1 




// 11. Write a JAVASCRIPT Program that displays below pattern using nested for loop 
                                      // 1 
                                      // 2  3 
                                      // 4  5  6 
                                      // 7  8  9  10 
                                      // 11 12 13 14 15 
        // let count =0;
        // for(let i = 1;i<=5;i++){
        //   let str = "";
        //       for(let j = 1;j<=i;j++){
        //         count++;
        //         str += count + " "
        //       }
        //       console.log(str);
        // }     



        //  OUTPUT
        //  1
        //  2 3
        //  4 5 6
        //  7 8 9 10
        //  11 12 13 14 15