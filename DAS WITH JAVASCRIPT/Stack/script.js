
class stack {
  constructor (){
    this.stack = []
  }

  insertData(val){
    this.stack.push(val)
  }
  
  deleteData(){
    this.stack.pop()
  }

  serachData(target){
      for (let i = 0; i < this.stack.length; i++) {
    if (this.stack[i] === target) {
     console.log(`target fount in index:${i}`)
     return
    }
  }
  return -1; // if not found

  }

  printStack(){
   this.stack.forEach(val => console.log(val))
  }
}



  

let stackData = new stack()
stackData.insertData(10)
stackData.insertData(20)
stackData.insertData(30)
stackData.serachData(30)
stackData.deleteData()
stackData.printStack()
