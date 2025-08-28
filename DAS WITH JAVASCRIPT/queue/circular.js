
class circulerQueue{
  constructor(size){
    this.queue = new Array(size)
    this.i = -1
    this.start = -1
    
  }


  insert (value){
     if(this.i === -1 && this.start==-1){
      this.i =this.start = 0
      this.queue[this.i] = value
     } else if ((this.i+1)%this.queue.length == this.start){
      console.log("queue is Full")
     }else{
      this.i = (this.i +1)%this.queue.length
      this.queue[this.i] = value
     }
  }

  delete (){
     if(this.i == -1 && this.start ==-1){
      console.log("queue is empty")
     } else if (this.i == this.start){
      this.i = this.start = -1
     }else{
      this.start = (this.start +1)%this.queue.length
     }
  }
  
  
  display (){
   let index = this.start
   if(this.i == -1 && this.start == -1){
    console.log("Queue is empty")
   }else{

     while(index!=this.i){
       console.log(this.queue[index])
       index = (index+1)%this.queue.length
      }
      console.log(this.queue[this.i])
    }
  }
}


let queue= new circulerQueue(5) 

queue.insert(10)
queue.insert(20)
queue.insert(30)
queue.insert(40)
queue.insert(50)
queue.display()
console.log("first")
queue.delete()
queue.insert(60)

queue.delete()
queue.insert(70)
queue.display()