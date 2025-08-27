
// 1.Write a program for Stack Operation Program (Insert, Delete, isEmpty, Length)

class Stack {
  constructor(){
    this.stack = []
  }

  Insert (val){
     this.stack.push(val)
  }

 

  Delete (){
    if(this.stack.length-1 <0){
      console.log("Stack Empty")
    }else{
  
      console.log(this.stack.pop(),"Is Delete")
    }
  }
  
  isEmpty (){
     return this.stack.length-1 <0?false:true
  }
  length(){
    console.log("Stack Length is:",this.stack.length)
  }


   Display (){
    let data = ""
    this.stack.forEach(ele => data+=ele + ",")
    console.log(data)
  }
}
console.log("OUTPUT:1")
let StackData = new Stack()
StackData.Insert(10)
StackData.Insert(20)
StackData.Insert(30)
StackData.Insert(40)

StackData.Delete()
StackData.Delete()

console.log(StackData.isEmpty())
StackData.length()
StackData.Display()


// OUTPUT
// 40 Is Delete
// 30 Is Delete      
// true
// Stack Length is: 2
// 10,20,




// 2.Write a program for Next Greater Element using Stack.

class Gretare {
  constructor(){
    this.stack = []
  }

   NextGreter (arr) {
  let result = new Array(arr.length).fill(-1)
  

  for (let i = arr.length - 1; i >= 0; i--) {
    while (this.stack.length > 0 && this.stack[this.stack.length - 1] <= arr[i]) {   
      this.stack.pop()
    }
    if (this.stack.length > 0) {
      result[i] = this.stack[this.stack.length - 1]      
    }
    this.stack.push(arr[i])                   
  }
  console.log("Next Greater: ", result)
}

}
console.log("------------------------------------------")
console.log("OUTPUT:2")

let arr = [5,9,7,8,10,4,15,9]
let GretterElemnt = new Gretare()
GretterElemnt.NextGreter(arr)

// OUTPUT 
// Next Greater:  [9, 10,  8, 10,15, 15, -1, -1]


// 3.Write a program for a reverse string using Stack


let ReversString =(str)=>{
  let stack = []
  let result = ""

   for (const element of str) {
       stack.push(element)
   }
   
   
  while(stack.length > 0){
    result +=stack.pop()
  }
 console.log(`Your Revers String is:${result}`)
}
console.log("------------------------------------------")
console.log("OUTPUT:3")

ReversString("Red And White")


// OUTPUT 
// Your Revers String is:etihW dnA deR
