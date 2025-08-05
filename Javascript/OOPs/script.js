

// class and object 

    class Test {        // create a class (blueprint of object is called a class)
      a = 20;
      b = 50;

  constructor(name){
   this.name = name
  }

      sum = ()=>{
        console.log(`sum of a and  b is:${this.a+this.b}`)  // (this.)  is used to access the membor in class
      }

    }



    let obj = new Test("darshik");   //create a object

    console.log(obj.a)
    console.log(obj.name)
    obj.sum()


    let obj2 = new Test("amit");
    console.log(obj2.b)
    console.log(obj2.name)
    obj2.sum()