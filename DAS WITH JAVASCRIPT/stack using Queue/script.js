class stack {
  constructor (){
    this.q1 = []
    this.q2 = []
  }

  Insert (value){
    this.q1.push(value)
  }

  Delete(){
     while(this.q1.length>1){
      this.q2.push(this.q1.shift())
     }
     [this.q1, this.q2] = [this.q2, this.q1];
     this.q2.shift()
  }

  display(){
    console.log(this.q1)
    console.log(this.q2)
  }
}




let usingqueue = new stack()


usingqueue.Insert(10)
usingqueue.Insert(20)
usingqueue.Insert(30)
usingqueue.Insert(40)
usingqueue.Delete()
usingqueue.Delete()
usingqueue.display()
