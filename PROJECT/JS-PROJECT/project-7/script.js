



// 1. Create a School class and create a student and faculty method. The Student method gives the student name, email and contact number as arguments and prints all details the same as faculty using class & object.

// class School {


//      student(name,email,contact){
//            console.log(`    Student Details    `)
//            console.log(`Name: ${name}`)
//            console.log(`Email: ${email}`)
//            console.log(`Contact: ${contact}`)
//      }

//      faculty(name,email,contact){
//            console.log(`    Faculty Details    `)
//            console.log(`Name: ${name}`)
//            console.log(`Email: ${email}`)
//            console.log(`Contact: ${contact}`)
//      }
// }


// let school = new School();
// school.student("Darshik Shekhada","darshik@gmail.com",9714920969)

// // OUTPUT
//     //    Stuent Details   
//     // Name: Darshik Shekhada 
//     // Email: darshik@gmail.com 
//     // Contact: 9714920969



// school.faculty("Girish sir","girish07@gmail.com",9845642364)

//     // OUTPUT
//     //    Faculty Details   
//     // Name: Girish sir
//     // Email: girish07@gmail.com 
//     // Contact: 9845642364





// 2.Create a Person class with an argument name and age. create an Employee class through print out details of Person Class. 

// class Person{
//     constructor(name,age){
//       this.name = name;
//       this.age = age
//     }
// }

// class Employee extends Person{
//    constructor (name,age){
//     super(name,age)
//    }

//       ptrdata(){
//           console.log(`Name : ${this.name}`)
//           console.log(`Age : ${this.age}`)
//       }
// }


// let emp = new Employee("darshik",24)
//  emp.ptrdata()


//     // OUTPUT
//     // Name : darshik 
//     // Age : 24





// 3.Employee class creates a constructor called print a simple message.
   
      // class Employee{
      //   constructor(){
      //     console.log(`Hello, everybody`)
      //   }
      // }


      // let emp = new Employee()


    //  // OUTPUT 
    //  // Hello, everybod



// 4.Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width*height) using with argument.


    // class Shape{

    //   rectangle (width,height){
    //     console.log(`reactangle area is : ${width*height}`)
    //   }

    //   circle (radius){
    //     console.log(`area of circule is : ${Math.PI * radius *radius}`)

    //   }
    // }

    // let area = new Shape();

    // area.rectangle(20,30)
    // area.circle(20)


    // // OUTPUT 
    // // reactangle area is : 600
    // // area of circule is : 1256.63