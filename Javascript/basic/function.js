
// function ebill(units){
//   if(units<=100){
//     return units* 0.50
//   } else if(units<=300){
//     return units * 0.70
//   }   else{
//     console.log("Units Use:",units)
//     console.log("Total Units uses Bill:",units*0.90);
//     console.log("10% Extar charge add:",((units* 0.90) * 0.1))
//     return (units*0.90)+((units* 0.90) * 0.1)  
//   }
// }


// let user_input = Number(prompt("Enter Unit"));
// let e_bill =   ebill(user_input);
// console.log("Your Electricity Bill:",e_bill);
// document.writeln(e_bill);



// function grosssalry(salary){
//   let da,hra;

//        if(salary<=5000){
//          da = salary *0.08;
//          hra = salary * 0.16
//          return salary+da+hra;
//        }else if (salary<=10000) {
//          da = salary *0.1;
//          hra = salary * 0.20
//          return salary+da+hra;
//        } else if(salary<=15000){
//          da = salary *0.12;
//          hra = salary * 0.24
//          return salary+da+hra;
//        } else{         
//          da = salary *0.14;
//          hra = salary * 0.28
//          return salary+da+hra;
//        }
// }
// let user_input = parseInt(prompt("Enter Your salry"));
// let gross_salry = grosssalry(user_input);
// console.log("Your currunt Salry is:",user_input);
// console.log("Your Gorss salry is:",gross_salry);



function addition(){
    let a =20,b = 34;
    console.log("addition of a and b is:",a+b);
}

function substaction(m,n){
      console.log("substaction of n and m is:",m-n);
} 

function multiple(){
   let a = 20,b =7
   return a*b;
}

function divison(a,b){
       return a/b;
}

let user_chose = 5;
switch (user_chose) {
  case 1:
    addition();
    break;  
  case 2:
    substaction(30,10);
    break;
      case 3:
        console.log("multipal a and b is:",multiple());
    break;
      case 4:
      console.log("divison of a and b is:",divison(42,7));
    break;

  default:
    console.log("Enter valid chose");
    break;
}



   function fact(n){          
    if(n==1){
      return 1                          
    } else{
      return n * fact(n-1);    
    }
   }

// my explanatio
        // 5 *4 =  20
        // 20* 3 = 60
        // 60* 2 = 120

   console.log(fact(5));