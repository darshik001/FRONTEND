class queue {
  constructor(){
    this.s1 = []
    this.s2 = []
  }

  Insert (value){
    this.s1.push(value)
  }

  Delete (){
    if(this.s1.length<=0){
    console.log("Queue Is Empty")
    }else{
      while(this.s1.length>1){
      this.s2.push(this.s1.pop())
    }
    this.s1.pop()
    while(this.s2.length>0){
      this.s1.push(this.s2.pop())
    }
    }
  }

   IsEmpty (){
    if(this.s1.length<=0){
      console.log("Queue Is Empty")
    }else{
      console.log("Queue Length Is :",this.s1.length)
    }
   }

  Display (){
  if(this.s1.length<=0){
   console.log("No Data Found")
  }else{
      console.log(this.s1)
  }
  }
}


let QueueData = new queue()

QueueData.Insert(10)
QueueData.Insert(20)
QueueData.Insert(30)
// QueueData.Insert(40)
// QueueData.Insert(50)
QueueData.Delete()
QueueData.Delete()
QueueData.IsEmpty()
QueueData.Display()