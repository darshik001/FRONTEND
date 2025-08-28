
class queue {
  constructor(){
    this.queue = []
  }

  insert(value){
    this.queue.push(value)
  }

  delete(){
    this.queue.shift()
  }


  serching(target){

    for(let i = 0 ;i< this.queue.length;i++){
      if(this.queue[i]==target){
        console.log(`target Found in index of ${i}`)
        return
      }
    }
  }

  topelement (){
    console.log(`top element is ${this.queue[0]}`)
  }

  display(){
    console.log(this.queue)
  }
}


let queueData = new queue()

queueData.insert(10)
queueData.insert(20)
queueData.insert(30)
queueData.insert(40)
queueData.insert(50)
queueData.display()
queueData.delete()
queueData.display()
queueData.serching(50)
queueData.topelement()


