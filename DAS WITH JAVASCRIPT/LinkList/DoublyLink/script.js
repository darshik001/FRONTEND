
 class node {
  constructor(data){
    this.prev = null
    this.data = data
    this.next = null
  }
 }


 class doublyLink {
  constructor(){
    this.head = null
    this.tail = null
  }

   addend(val){
   let temp = new node(val)
       if(this.head == null){
        this.head = temp
        this.tail = temp
       } else{
        
        this.tail.next = temp
       temp.prev = this.tail
       this.tail = temp
         
       }
       
   }

   deleteend(){
    if(this.tail == null){
      console.log("List is Emty")
      return
    }

      if(this.tail === this.head){
        this.head = null
        this.tail = null
      } else{

        this.tail = this.tail.prev
        this.tail.next = null
      }
   }

   display (){
    let currnt  = this.head
    while(currnt!==null){
      console.log(currnt.data)
      currnt = currnt.next
    }
   }

   reversdisplay(){
    let currnt = this.tail
  

    while(currnt !==null){
      console.log(currnt.data)
      currnt = currnt.prev
    }
   }

 }

 let DoblyList = new doublyLink()
 DoblyList.addend(10)
 DoblyList.addend(20)
 DoblyList.addend(30)
 
 DoblyList.deleteend()

//  DoblyList.display()
 DoblyList.reversdisplay()