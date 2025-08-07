

class node {
  constructor(data){
    this.data = data
    this.next = null
  }
}


class siglyLink {
    constructor(){
     this.head = null
    }

    // ADD DATA IN END 
    addataend (val){
       let temp = new node(val)
       
       
       if(this.head == null){
        this.head= temp;
        return;
       } else{
        let current  = this.head
        while(current.next != null){
          current = current.next
        }
        current.next = temp
       }
    }

    // DELETE DATA IN END 
    deleteDataEnd(){
      let current  = this.head
      let preview;
      if(current.next == null){
        this.head = null
      } else{
while(current.next){
        preview = current
        current = current.next
       }
       preview.next = null
      }

    }


    // ADD DATA IN FIRST 

    addataFirst(val){
      let temp  = new node(val)
      if(this.head == null){
        this.head = temp
      }else{
        temp.next = this.head
        this.head = temp
        
      }
    } 


    // DELETE DATA IN FIRST 

        deleteDataFirst (){
          if(this.head != null){
            let currrnt = this.head
            this.head = currrnt.next
          }
        }

  // ADD DATA IN MIDDAL 

     addatamid(position,val){

      if(this.head==null){
          alert("List Is Empty")
      } else if(this.head.data == position){
              this.addataFirst(val)
      } else {
        let temp = new node(val)
            let currnt = this.head
            let preview
            while(currnt.data !== position && currnt.next !== null){
              preview = currnt
              currnt = currnt.next
            }
            
            if(currnt.data == position){
                temp.next = currnt
                preview.next = temp
            } else{
             alert(`${position} Not Exist In List`)
            }
      }
    }


    // DELETE IN MEDDAL 

     deleteDataMid(position){
       if(this.head==null){
          alert("List Is Empty")
      } else if(this.head.data == position){
              this.deleteDataFirst()
      } else {
       
            let currnt = this.head
            let preview
            while(currnt.data !== position && currnt.next !== null){
              preview = currnt
              currnt = currnt.next
            }
            
            if(currnt.data == position){
                preview.next = currnt.next
            } else{
             alert(`${position} Not Exist In List`)
            }
      }
     }


    // DISPLAY DATA 
    displayData (){
      if(this.head == null){
        console.log("List Is Empty")
      }
      
      else{
         let current = this.head
         while(current){
           console.log(current.data)
           current = current.next
         }
      }
    }

    

    


}


let Singly = new siglyLink()


Singly.addataend(10)
Singly.addataend(20)
Singly.addataend(30)
Singly.addataend(40)
Singly.addataend(50)

// Singly.addataFirst(50)
// Singly.addataFirst(60)
// Singly.addataFirst(70)

// Singly.deleteDataFirst()
// Singly.deleteDataFirst()
// Singly.deleteDataFirst()
// Singly.deleteDataFirst()
// Singly.deleteDataFirst()
// Singly.deleteDataFirst()
// Singly.deleteDataFirst()

// Singly.addatamid(40,35)
// Singly.addatamid(50,45)



Singly.deleteDataMid(10)
Singly.deleteDataMid(50)
Singly.deleteDataMid(10)

Singly.displayData()
