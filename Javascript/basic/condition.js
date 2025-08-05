

// if, if else , nested , ladder , switch , ternary 


// 1.if  and if else and ternary
/*
syntex
      if(condition){
      //  statement 
      }
*/

//  let a =12;
// if(a%2==0){
//   console.log("even Number");
// }

/*
syntex
      if(condition){
      //  statement 
      } else{
      //  statement 
       }
*/

// let a =12;
// if(a%2==0){
//   console.log("even Number");
// }  else{
//   console.log("odd Number");
// }



/* 
 syntex:

    condition ? true:false
*/
// let a =12;
// a%2==0 ?console.log("even Number"):console.log("odd Number");





// 2.nested if else

/*
   syntex

   if(condition){

      if(condition){
        statment
      } else{
       }

   }   else{

       if(condition){
        statment
      } else{
       }

      }
 */


// let a=10,b=23,c=45;

// if(a>b){
//      if(a>c){
//       console.log("a is max");
//      }  else{
//        console.log("c is max");
//      }
// }  else{
//     if(b>c){
//       console.log("b is max");
//     }  else{
//       console.log("c is maximum");

//     }
// }








//PROGRAM

// 1.Enter two value find smallest.

// let a =20, b =85;
// if(a<b){
//   console.log("a is small");
// } else{
//   console.log("b is small");
// }


// 2. Enter one value find its positive or negative.

//  let a;
//  a = Number(prompt("Enter value"));

// if(a>=0){
//    console.log("Positive Number");
// }  else{
//    console.log("Negative Number");
// }


// 3. Enter one value find its divisible by 5 or not.

//  let a;
//  a = Number(prompt("Enter value"));

//  if(a%5==0){
//     console.log(a,"this number is divisible by 5");
//  } else{
//     console.log(a,"this number is not divisible by 5");
//  }


// 4.Enter one value find its divisible by 5 and 3 or not.


//   let a;
//  a = Number(prompt("Enter value"));

//  if(a%5==0 || a%3==0){
//     console.log(a,"this number is divisible by 5 and 3");
//  } else{
//     console.log(a,"this number is not divisible by 5 and 3");
//  }


// 5.Enter Students marks wheather pass or not

//  let marks;
//  marks = parseInt(prompt("Enter marks to check pass or not",marks));

//  if(marks>=33){
//      console.log("This student is pass");
//  } else{
//      console.log("This student is faile");     
//  }



// 6.Enter year find its leap year or not

//  let year = 1996;

// if (year % 4 == 0) {
//   console.log(leap year");
// } else {
//   console.log( not a leap year");
// }


// 7. Enter a, b, c find minimum among them

// let a = 10,b=20,c=30;

//   if(a>b){
//      if(a>c){
//       console.log("a is max");
//      }  else{
//        console.log("c is max");
//      }
// }  else{
//     if(b>c){
//       console.log("b is max");
//     }  else{
//       console.log("c is maximum");

//     }
// }


// ledder if else 

// let marks=86;
// if(marks<0 || marks>100){
//   console.log("Enter valid Marks");
// }else{
//       if (marks>=90) {
//   console.log("Your Grade is: A");
// } else if(marks>=75){
//   console.log("Your Grade is: B");
// } else if(marks>=60){
//   console.log("Your Grade is: C")
// } else if(marks>=35){
//   console.log("Your Grade is: D")
// }  else{
//   console.log("Your suucessfully Failed")
// }
// }


// CHANGE PASSWORD LOGIC
// let password =1234;
// let cur_pass=1234, new_pass=12345, con_pass=12345;


// if (password == cur_pass) {
//   if (new_pass == cur_pass) {
//     console.log("Current password and New password is same")
//   } else {
//     if (new_pass == con_pass) {
//       console.log("Password Change successfully")
//     } else {
//       console.log("New Password And Conform Password is Not Match")
//     }
//   }

// } else {
//   console.log("current password dose not match");
// }



//1. ELETRICITY BILL  FIRST 100 UNITS =60P , 200 UNITS =80P,BAYOND 300 = 90P  TOTTAL AMOUT ARE MORE THEN 300 UP 15% ADD ADDITIONAL CHARGE 

// let units=100,e_bill,fix_charge=50;
// if(units<0){
//     console.log("Not Gentert Bill")
// } else{
// if(units <=100){
//       e_bill = (units * 0.60);
//       e_bill+= fix_charge;
// }   else if(units>100 && units<=300){
//      e_bill = units*0.80;
//      e_bill+=fix_charge;
// }  else{
//      e_bill = units *0.90;
//      e_bill+=fix_charge;
// }

//  if(e_bill>=300){
//        e_bill += e_bill*0.15;
//        console.log("Fix Charge:",fix_charge)
//        console.log("Extra Charge: 15%")
//        console.log("Your Bill Amount:",e_bill)
//   }  else{
//        console.log("Fix Charge:",fix_charge)
//        console.log("Your Bill Amount:",e_bill)
//   }
// }


// 2.ELIGIGBLE FOR VOTIN OR NOT 

      // let age;
      //   age = Number(prompt("Enter Age",age))
      //   if(age>=18){
      //       console.log("Your Eligible For Voting")
      //   } else{
      //     if(age<0){
      //       console.log("Enter Valide age")
      //     }else{
      //       console.log("Your Not Eligible For Voting")
      //     }
      //   }



      // 3.   CALCULATE GROSS SALARY

        // let salary=9000,hra,da,gro_salary

        // if(salary<=5000){
        //      hra = salary*0.08;
        //      da = salary*0.20;
        // } else if(salary<=10000){
        //      hra = salary*0.12;
        //      da = salary*0.30;
        // }  else if(salary<=15000){
        //      hra = salary*0.15;
        //      da = salary*0.40;
        // }  else if(salary>15000){
        //      hra = salary*0.20;
        //      da = salary*0.50;
        // }

        // gro_salary = salary+hra+da;
        // console.log("Your salary:",salary);
        // console.log("Your HRA:",hra);
        // console.log("Your DA:",da);
        // console.log("Your Gross Salary:",gro_salary);


        // 4. INCOME TEX SLAB RATES

            //     0 -  2500   0%
            //  2500 -  5000  10%
            //  5000 - 10000  20%
            //     10000+     30%


        //     let income=10000,slab2,slab3,salb4;
        //  if(income<=2500){
        //   console.log("TEXT PAY RS: 0")
        //  }  else if(income>2500 && income<=5000){
        //            income-=2500;
        //            slab2 = income *0.10;
        //            console.log("TEX PAY RS:",slab2,)
        //  }   else if(income>5000 &&income<=10000){
        //            slab2 = 2500*0.10;
        //            income-=5000;
        //            slab3= income *0.20;
        //            console.log("TEX PAY RS:",slab2+slab3)
        //  }   else{
        //          slab2 = 2500*0.10;
        //          slab3 = 5000*0.20;
        //          income -=10000;
        //          salb4 = income*0.30;
        //          console.log("TEX PAY RS:",slab2+slab3+salb4)
        //  }



      //  5.GRADE 

         // let marks=86;
        // if(marks<0 || marks>100){
        //   console.log("Enter valid Marks");
        // }else{
        //       if (marks>=90) {
        //   console.log("Your Grade is: A");
        // } else if(marks>=75){
        //   console.log("Your Grade is: B");
        // } else if(marks>=60){
        //   console.log("Your Grade is: C")
        // } else if(marks>=35){
        //   console.log("Your Grade is: D")
        // }  else{
        //   console.log("Your suucessfully Failed")
        // }
        // }


        // 6 PRINT X <2000 and >3000; AND Y = >100 and <500;

        // let x=4000 ,y=400;
           
        // if (x<2000 || x>3000)
        //   {
        //     console.log("X=",x);
        //   }   else{
        //       console.log("X is not criterion")
        //   }

        //   if (y>=100 &&y<=500) {
        //     console.log("Y=",y);
        //   } else{
        //       console.log("Y is not criterion")
        //   }