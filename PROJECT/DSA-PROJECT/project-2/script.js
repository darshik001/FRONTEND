

// 1.WAP for Circular Linklist Operation (Insert, delete, display)
     class cnode{
      constructor(data){
        this.data = data;
        this.next = null
      }
     }

     class circularList {
constructor(){
  this.head = null
  this.last = null
}

  apddend(val){
    let temp = new cnode(val)
      if(this.head == null){
        this.head = temp
        this.last = temp
        this.last.next = this.head
      } else{
        this.last.next= temp
        temp.next = this.head
        this.last = temp
      }
  }

  deleteData(){
    let currnt = this.head
    let previus = null
     
        if(this.head == this.last){
          this.head = null
          this.last = null
        }else{

          
          while(currnt !== this.last){
            previus = currnt
            currnt = currnt.next
          }
          
          previus.next = this.head
          this.last = previus
        }
   
  }

  displayData(){
    let currnt = this.head
    if(this.head == null){
      console.log("List Empty")
      return
    }

    do{
      console.log(currnt.data)
      currnt = currnt.next
    } while(currnt !== this.head)
  }
     }


let circular = new circularList()
circular.apddend(10)
circular.apddend(20)
circular.apddend(30)
circular.apddend(40)
circular.apddend(50)
circular.deleteData()
circular.deleteData()

circular.displayData()

// OUTPUT 

// 30
// 10
// 20








// 2. WAP for Reverse Singly Linklist
class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class siglyLink {
  constructor() {
    this.head = null;
  }

  
  addataend(val) {
    let temp = new node(val);

    if (this.head == null) {
      this.head = temp;
      return;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = temp;
    }
  }

 

  // PALINDROM  LIST OR NOT

  ispalindrom() {
    let arr = [];
    let currnt = this.head;
    while (currnt) {
      arr[arr.length] = currnt.data;
      currnt = currnt.next;
    }
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(arr.length / 2);

    while (start <= mid) {
      if (arr[start] !== arr[end]) {
        return false;
      }
      start++;
      end--;
    }

    return true;
  }

  //  REVERS LIST

  reverseList() {

      let end = this.head;
      while (end.next !== null) {
          end = end.next;
      }

      while (this.head !== end) {
          let current = this.head;
          this.head = this.head.next;
          current.next = end.next;
          end.next = current;
      }
  }

  

  // DISPLAY DATA
  displayData() {
    if (this.head == null) {
      console.log("List Is Empty");
    } else {
      let listdata  = "";
      let current = this.head;
      while (current) {
        listdata += current.data + "->"
        current = current.next;
      }
      console.log(listdata)
    }
  }
}

let Singly = new siglyLink();

Singly.addataend(10);
Singly.addataend(20);
Singly.addataend(30);
Singly.addataend(40);
Singly.addataend(50);

Singly.reverseList();
Singly.displayData();

// OUTPUT 

// 50->40->30->20->10->






// 3. WAP for check linklist is palindrome or not.

class pnode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class palindrom {
  constructor() {
    this.head = null;
  }

  
  addataend(val) {
    let temp = new pnode(val);

    if (this.head == null) {
      this.head = temp;
      return;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = temp;
    }
  }

 

  // PALINDROM  LIST OR NOT

  ispalindrom() {
    let arr = [];
    let currnt = this.head;
    while (currnt) {
      arr[arr.length] = currnt.data;
      currnt = currnt.next;
    }
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(arr.length / 2);

    while (start <= mid) {
      if (arr[start] !== arr[end]) {
        return false;
      }
      start++;
      end--;
    }

    return true;
  }




  

  // DISPLAY DATA
  displayData() {
    if (this.head == null) {
      console.log("List Is Empty");
    } else {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
}

let palindromcheck = new palindrom();

palindromcheck.addataend(10);
palindromcheck.addataend(20);
palindromcheck.addataend(30);
palindromcheck.addataend(20);
palindromcheck.addataend(10);


if(palindromcheck.ispalindrom() === true){
  console.log("This List Is Palindrom")
}else{
  console.log("This List Is Not Palindrom")
}


palindromcheck.displayData();

// OUTPUT 

// This List Is Palindrom
// 10
// 20
// 30
// 20
// 10