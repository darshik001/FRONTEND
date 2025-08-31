class dubble {
  constructor(){
    this.queue = []
  }
  InsertEnd(value){
    this.queue.push(value)
  }

  InsertsSart(value){
    this.queue.unshift(value)
  }

  DeleteEnd(){
    this.queue.pop()
  }

  DeleteStart(){
    this.queue.shift()
  }

  Display(){
    console.log(this.queue)
  }
}


let Queuedata = new dubble()
Queuedata.InsertEnd(10)
Queuedata.InsertEnd(20)
Queuedata.InsertEnd(30)
Queuedata.InsertsSart(40)

Queuedata.DeleteEnd()
Queuedata.DeleteStart()

Queuedata.Display()