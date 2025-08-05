

// 1. Write a JAVASCRIPT Program to print a greeting message using with argument no return type function when call a function without argument at that time print message Good Morning. 

// let printmsg =(message)=>{
//       if(message){
//           console.log(message)
//       } else{
//           console.log("Good Morning")
//       }
// }

// printmsg();

// OUTPUT

// without argument
// printmsg()    then  print Good Morning 

// with argument
// printmsg("How Are You?") then print: How Are You?




// 2. Write a JAVASCRIPT Program to find Circle area (area pi*r*r) using return type with argument function.

// let circle = (r)=> 3.14*(r**2)


// let user_input = Number(prompt("Enter value to finde circle area"))
// let area = circle(user_input);
// console.log("Circle Area Is:",area);

// OUTPUT 

// user_input = 20
// then print
// Circle Area Is: 1256



// 3. Write a JAVASCRIPT Program to find Triangle area (area = (1*h)/2) using return type with argument function. 

//  let triangle = (l,h)=> (l*h)/2

//  let area = triangle(18,24);
//  console.log("Triangle Area Is:",area);


// OUTPUT 

// triangle(20,30)
// then print
// Triangle Area Is: 320



// 4. Write a JAVASCRIPT Program to find Rectangle area = 1 h using return type with argument function. 

// let rectangle =(l,h)=> l*h 

//  let area = rectangle(10,15);
//  console.log("Rectangle Area Is:",area);


 // OUTPUT 

// rectangle(15,17)
// then print
// Rectangle Area Is: 255



// 5. Write a JAVASCRIPT Program to find ans of ((b*b)(4*a*c))/(2*a) using return type with argument function. 

// let find_value = (a,b,c)=>((b*b)*(4*a*c))/(2*a)    

// let cal = find_value(10,20,30)
// console.log("Your Ans Is",cal);

// OUTPUT 
// find_value(10,20,30)
// then print
// Your Ans Is:24000



// 6. Write a JAVASCRIPT Program to find ans of (a*a) + (2*a*b) + (b*b) using return type with argument function 

// let find_value =(a,b)=> (a*a) + (2*a*b) + (b*b)    

// let cal = find_value(23,15)
// console.log("Your Ans Is:",cal)

// OUTPUT 

// find_value(12,23)
// then print
// Your Ans Is: 1225 



// 7. Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f-32)/1.8) using return type with argument function 

// let celsius = (f)=> (f-32)/1.8

// let fahrenheit = Number(prompt("Enter Fahrenheit"));

// let cal_celsius = celsius(fahrenheit); 
// console.log("celsius is:",cal_celsius)

// OUTPUT 

// fahrenheit = 70
// then print
// celsius is: 21.11




// 8. Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f= (c*1.8)+32) using return type with argument function 


// let fahrenheit = (c)=> (c*1.8)+32

// let celsius = Number(prompt("Enter celsius"));

// let cal_fahrenheit = fahrenheit(celsius); 
// console.log("fahrenheit is:",cal_fahrenheit)

// OUTPUT 

// celsius = 16
// then print
// fahrenheit is: 60.8



// 9. Write a JAVASCRIPT Program to find if a given number is odd or even using an argument with no return type. 

// let oddeven = (number)=>{
//   if(number%2==0){
//     console.log(number+" is even number");
//   } else{
//     console.log(number+" is odd number")
//   }
// } 

// let number = Number(prompt("Enter number to check odd or even"));
// oddeven(number);

// OUTPUT 

// number = 23
// then print 
// 23 is odd number 


// 10. Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type 

// let swap = (a,b)=>{
//      a = a+b;
//      b = a-b;
//      a = a-b
//      console.log("value of a:",a)
//      console.log("value of b:",b)
// }

// swap(45,20)

// OUTPUT 
//  swap(45,10)
//  then print 
// value of a: 10
// value of b: 45