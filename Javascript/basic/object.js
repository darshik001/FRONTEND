
// let obj = {

// }


// let person = {
//   name:"darshik"
//   mobile:9714920969,
//   email:"darshikshekhada07@gmail.com",
//   age:19,
//   msg:function (){
//     console.log(`hello`)
//   }
// }
// console.log(person.name.firstname )
// person.msg()
// 1. dot(.) method to access 
// console.log(person.name)
// person.name = "darshik shekhada";
// console.log(person.name)


// 2 [] method to access 
// console.log(person["name"])


// method 


  // console.log(person.hasOwnProperty("name"))
  // console.log(person.hasOwnProperty("fdname"))

  // console.log(Object.keys(person))
  // console.log(Object.values(person))




// let person = {
//   name:"darshik",
//   age:23,
//   hobbies:["reding","traveling","music"],
//   address: {
//     shop_no:436,
//     bulding_name:"sayona plza",
//     lendmark:"near silver showk",
//     city:"surat"
//   }
// }

// console.log(person)

// for(let key in person){
//   if(key=="address"){
//     let add = ""
//     for(let key in person.address){
//        add += person.address[key] + ","
//     }
//     console.log(`${key} => ${add}`)
//   }else{
//     console.log(`${key}=>${person[key]}`)
//   }
// }


// console.log(person.hobbies[0]);
// console.log(person.address.city)




// for in (object,array) and for of (array)



// 1. for in loop 

// 1. object for in loop
// for(let key in person){
//   console.log(`${key} =>${person[key]}`)
// }
  

// 2. array for in loop

  // let arr = [11,22,33,44,55]

  // for(let key in arr){
  //   console.log(arr[key])
  // }



  // 2 for of loop 

      //  for of loop  use onliy array

  //          for(let val of arr){
  //   console.log(val)
  // }



let arr = [
  { name: "darshik", mno: 9876543210, pwd: "darshik", age: 24 },
  { name: "amit", mno: 8765432109, pwd: "amit", age: 28 },
  { name: "rutvik", mno: 7654321098, pwd: "rutvik", age: 22 },
  { name: "rahul", mno: 6543210987, pwd: "rahul", age: 30 },
  { name: "priya", mno: 5432109876, pwd: "priya", age: 25 },
  { name: "neha", mno: 4321098765, pwd: "neha", age: 27 },
  { name: "sanjay", mno: 3210987654, pwd: "sanjay", age: 32 },
  { name: "meera", mno: 2109876543, pwd: "meera", age: 21 },
  { name: "vikram", mno: 1098765432, pwd: "vikram", age: 35 },
  { name: "anjali", mno: 9988776655, pwd: "anjali", age: 19 },
  { name: "karan", mno: 8877665544, pwd: "karan", age: 26 },
  { name: "divya", mno: 7766554433, pwd: "divya", age: 29 },
  { name: "arjun", mno: 6655443322, pwd: "arjun", age: 33 },
  { name: "isha", mno: 5544332211, pwd: "isha", age: 23 },
  { name: "rohan", mno: 4433221100, pwd: "rohan", age: 31 },
  { name: "tanvi", mno: 3322110099, pwd: "tanvi", age: 20 },
  { name: "raj", mno: 2211009988, pwd: "raj", age: 36 },
  { name: "pooja", mno: 1100998877, pwd: "pooja", age: 18 },
  { name: "manish", mno: 9998887776, pwd: "manish", age: 38 },
  { name: "sneha", mno: 8887776665, pwd: "sneha", age: 40 }
];

console.log(arr)

arr[18].pwd = "12345"

let u_name = "pooja"
let pssword = "pooja"
let login  = false
let count =[]
  for(val of arr){
     
    if(val.name==u_name && val.pwd == pssword){
      login = true
      count.push(val.name)
         break;
        } 
  }

   if(login){
     console.log("login success")
  }  else{
    console.log("wrong user name and pwd")
        }


        console.log(count)








 // global count

// function loginUser(u_name, pssword){
//     let login = false;
//     for(let val of arr){
//         if(val.name == u_name && val.pwd == pssword){
//             login = true;
//             count.push(val.name);
//             break;
//         }
//     }

//     if(login){
//         console.log("Login success");
//     } else {
//         console.log("Wrong username or password");
//     }

//     console.log("Count:", count);
// }

// // First login
// // loginUser("sneha", "sneha");

// // Second login
// loginUser("pooja", "pooja");
// loginUser("darshik", "darshik");

// // Now count will have ["sneha", "pooja"]
