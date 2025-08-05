

// inheritance   1/simpal 2.multilevel 3.hierarchical


 class Person {
  constructor(name,age){
  this.name = name;
  this.age = age;
  }

     getdetelis(){
        console.log(`${this.name} person age is ${this.age}`)
     }
 }

// 1. simpal 

  // class Student extends Person{
  //     constructor(name,age,city){
  //       super(name,age);
  //       this.city = city
  //     }  

  //     getData(){
  //        console.log(`${this.name} is ilves in ${this.city}`)
  //     }

  // }


  // let obj = new Student("darshik",24,"Surat");

  //   obj.getdetelis()




// 2.multilevel

// class Student extends Person{
  //     constructor(name,age,city){
  //       super(name,age);
  //       this.city = city
  //     }  

  //     getData(){
  //        console.log(`${this.name} is ilves in ${this.city}`)
  //     }

  // }

  // class Employe extends Student{
  //          constructor(name,age,city,role){
  //           super(name,age,city)
  //           this.role = role
  //          }

  //          getinfo(){
  //            console.log(`${this.name} role is ${this.role}`)
  //          }
  // }



  // let obj = new Employe("Darshik",24,"surat","web devloper");

  // obj.getdetelis()
  // obj.getData()
  // obj.getinfo()




  // 3.hierarchical


  class Student extends Person{
      constructor(name,age,city){
        super(name,age);
        this.city = city
      }  

      getData(){
         console.log(`${this.name} is ilves in ${this.city}`)
      }

  }


    class Employe extends Person{
      constructor(name,age,role){
        super(name,age);
        this.role = role
      }  

      getinfo(){
         console.log(`${this.name} role is ${this.role}`)
      }

  }


  let obj1 = new Student("Darshik",24,"surat")
  let obj2 = new Employe("Renish",25,"invisible grill")

  obj1.getdetelis()
  obj1.getData()


  obj2.getdetelis()
  obj2.getinfo()