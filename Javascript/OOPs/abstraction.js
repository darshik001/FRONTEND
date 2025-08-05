

// abstraction     =>   create a privet member



class Info {
  #name = "Rakesh";     // # mens declear a privet  
  #pwd = 123456;

  #getData (){
     return(`Username is ${this.#name} and password is ${this.#pwd}`)
  }

   ptrData (){
     console.log(this.#getData())
   }

  //  constructor(){
  //    this.ptrData()
  //  }
}


let obj = new Info()

console.log(obj.name)  //not access outside 
obj.ptrData()

