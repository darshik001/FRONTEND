
// two types of export and import 
// 1.comman js 
// 2.ES6



// 1.comman js => 1.default exports and 2. named exports

// 1.default exports
// let addition  = (a,b) => a+b;
// let dvivison = (a,b) => a/b;
//singal exports
// module.exports = addition

//multipal exports
// module.exports = {addition,dvivison}


// 2.named exports 

// exports.addition = (a,b)=>{

//   return a + b;

// }

// exports.substraction = (a,b)=>{
//   return a-b
// }


// 2.ES6 

// 1.Defult export

// let addition  = (a,b) => a+b;
// let dvivison = (a,b) => a/b;

// export default {addition,dvivison}


// 2.named export 

export const addition = (a,b)=>{
   return a+b
}


export const multification = (a,b)=>{
   return a*b
}