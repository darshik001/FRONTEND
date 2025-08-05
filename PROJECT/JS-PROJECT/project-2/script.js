
// 1.Enter Electricity UNIT And Caculate Amount TO Pay 


//  let unit=250,bill;

//  if(unit<=50){
//     bill = unit*1;
//     console.log("Amount to Pay:",bill);
//  } else if(unit<=150){
//     bill = unit * 2;
//     console.log("Amount to Pay:",bill);
//  } else if(unit<=250){
//     bill = unit * 3;
//     bill +=bill*0.20;
//     console.log("Amount to Pay:",bill);
//  }else{
//     bill = unit * 4;
//     bill +=bill*0.20;
//     console.log("Amount to Pay:",bill);
//  }

//  output 1:
//  unit=250
//  then   Amount to pay: 900


// 2.Write a program to season according user inputusing switch case

// let u_input = Number(prompt("Enter Number Between 1-12"))

// switch (u_input) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   console.log("Winter")
//     break;
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   console.log("Summer")
//     break;
//   case 9:
//   case 10:
//   case 11:
//   case 12:
//   console.log("Moonsoon")
//     break;
//   default:
//   console.log("Invalid Season")
//     break;
// }

// output 2:
// u_input = 5
// then output is :Summer



// 3. Write a Program to find rate based on year and calculate total interest using nested if

// let p = 10000, r, i, n = 3;

// if(n<3){
//    console.log("Minimum  calculate interest 3 Years")
// }  else{
// if (n >= 3 ) {
//   if (n <= 5) {
//     r = 3
//     i = (p * r * n) / 100;
//     console.log("total interest:",i);
//   } else {
//     if (n <= 8) {
//       r = 5;
//       i = (p * r * n) / 100;
//       console.log("total interest:",i);
//     } else {
//       if (n <= 12) {
//         r = 12;
//         i = (p * r * n) / 100;
//         console.log("total interest:",i);
//       } else{
//   r = 15;
//   i = (p * r * n) / 100;
//   console.log("total interest:",i);
//       }
//     }
//   }
// }
// }


   // output 3:
  //  p=10000 and n = 10
  //  total interest = 12000




// 4.Write A Program Check Voting Eligibility 

  //  let age = Number(prompt("Enter Your age"));

  //    if(age>=18){
  //       console.log("Your Eilgible For Voting");
  //    }  else{
  //     if(age<=0){
  //       console.log("Enter valid Age");
  //     } else{
  //       console.log("You are still",age,"years old, so you cannot vote.");
  //     } 
  //    }

  // output 4:
  //  age = 10;
  // print: You are still 10 years old, so you cannot vote.




// 5.Write a program to classify age group 

//    let age = 35
//   if(age<0){
//     console.log("Enter valid age")
//   } else{
// if(age<=1){
//     console.log("Infant")
//    } else if (age<=12) {
//      console.log("Child")
//    }  else if (age<=19) {
//     console.log("Teenager")
//    } else if (age<=35) {
//     console.log("Young Adult")
//    } else if(age<=59){
//     console.log("Adult")
//    } else{
//     console.log("Senior")
//    }
//   }
   
  // output 5:
  // age = 22
  // print: teenager

