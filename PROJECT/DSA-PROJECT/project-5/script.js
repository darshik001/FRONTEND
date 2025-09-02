
// 1.Write a program for Circular Queue.


// class circulerQueue{
//   constructor(size){
//     this.queue = new Array(size)
//     this.i = -1
//     this.start = -1

//   }


//   insert (value){
//      if(this.i === -1 && this.start==-1){
//       this.i =this.start = 0
//       this.queue[this.i] = value
//      } else if ((this.i+1)%this.queue.length == this.start){
//       console.log("queue is Full")
//      }else{
//       this.i = (this.i +1)%this.queue.length
//       this.queue[this.i] = value
//      }
//   }

//   delete (){
//      if(this.i == -1 && this.start ==-1){
//       console.log("queue is empty")
//      } else if (this.i == this.start){
//       this.i = this.start = -1
//      }else{
//       this.start = (this.start +1)%this.queue.length
//      }
//   }


//   display (){
//    let index = this.start
//    if(this.i == -1 && this.start == -1){
//     console.log("Queue is empty")
//    }else{

//      while(index!=this.i){
//        console.log(this.queue[index])
//        index = (index+1)%this.queue.length
//       }
//       console.log(this.queue[this.i])
//     }
//   }
// }


// let queue= new circulerQueue(5) 

// queue.insert(10)
// queue.insert(20)
// queue.insert(30)
// queue.insert(40)
// queue.insert(50)
// queue.delete()
// queue.insert(60)
// queue.insert(70)
// queue.display()

// OUTPUT 
// queue is Full
// 20
// 30
// 40
// 50
// 60



// 2.write a program Queue using two stacks.


// class queue {
//   constructor(){
//     this.s1 = []
//     this.s2 = []
//   }

//   Insert (value){
//     this.s1.push(value)
//   }

//   Delete (){
//     if(this.s1.length<=0){
//     console.log("Queue Is Empty")
//     }else{
//       while(this.s1.length>1){
//       this.s2.push(this.s1.pop())
//     }
//     this.s1.pop()
//     while(this.s2.length>0){
//       this.s1.push(this.s2.pop())
//     }
//     }
//   }



//   Display (){
//   if(this.s1.length<=0){
//    console.log("No Data Found")
//   }else{
//       console.log(this.s1)
//   }
//   }
// }


// let QueueData = new queue()

// QueueData.Insert(10)
// QueueData.Insert(20)
// QueueData.Insert(30)
// QueueData.Delete()
// QueueData.Display()


// OUTPUT 
// [20, 30]






// 3.write a program check first string swap can make strings equal. 


// let stringEqual = (s1, s2) => {
//   if (s1.length !== s2.length) {
//     return false;
//   }

//   let arr = [];

//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       arr.push(i);
//     }
//     if (arr.length > 2) {
//       return false;
//     }
//   }
//   if (arr.length === 0) {
//     return true;
//   }
//   if (arr.length !== 2) {
//     return false;
//   }

//   let [i, j] = arr;
//   return s1[i] === s2[j] && s1[j] === s2[i];
// };


// console.log(stringEqual("meet", "mete"))
// console.log(stringEqual("luv", 'luv'))
// console.log(stringEqual("mit", "meet"))


// OUTPUT 
// true
// true
// false