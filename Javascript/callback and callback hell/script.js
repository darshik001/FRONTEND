//  callback and callback hell 

let greeting = (callback,a,b,c) =>{
      console.log("greeting is run")
      callback(a,b,c)
}


let callback = (a,b,c)=>{
console.log("value if a = ",a)
  third(b,c)
}

let third = (b,c)=>{
  console.log("value if b = ",b)
  forth(c)
}

let forth = (c)=>{
  console.log("value if c = ",c)

}

greeting(callback,10,20,30)