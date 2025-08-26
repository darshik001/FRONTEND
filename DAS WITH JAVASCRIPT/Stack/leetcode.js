
// 1. Revers string 


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

ReversString("hello")
ReversString("darshik")



// 2.Balanced parenthesis

let parenth = (data)=>{
   let stack = []
   let pair = {
    ')':'(',
    '}':'{',
    ']':'[',
   }

   for (let i = 0;i<data.length;i++) {
    if (data[i]=="(" ||data[i]=="["||data[i]=="{") {
      stack.push(data[i])
    }else{
      if(stack.length ==0 ||stack.pop()!=pair[data[i]] ){    //)
        return false
      } 
    }
   }
             return stack.length === 0


}

console.log(parenth('([{}])'))


// 3.Next greater elements

let NextGreter = (arr) => {
  let result = new Array(arr.length).fill(-1)
  let stack = []

  for (let i = arr.length - 1; i >= 0; i--) {
    // remove smaller elements
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {   // 3<2
      stack.pop()
    }
    // if stack not empty, top is next greater
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1]         //[3,5,8,10,10,10,20,-1]
    }
    // push current element for future
    stack.push(arr[i])                           //[20,10,8,5,3]
  }
  console.log("Next Greater: ", result)
}

let arr = [2, 3, 5, 8, 4, 2, 10, 20]
NextGreter(arr)
