
// polymorphism

// overriding
class Track {
  constructor(name) {
      this.name =name;
  }
     getTrack(){
       console.log(`${this.name} track....`)
     }

     
}


class Track2 extends Track{
  constructor(name,t_name){
    super(name);
    super.getTrack()
    this.t_name = t_name;
  }
  getTrack(){
      console.log(`${this.t_name} track...`);
  }
  
}


class Track3 extends Track{
  constructor(name,t_name){
    super(name)
   super.getTrack()    // call  Track  getTrack method
    this.t_name = t_name
  }

  getTrack(){
      console.log(`${this.t_name} track...`)
  }
}


let obj = new Track2("racing","car");

obj.getTrack()

let obj2 = new Track3("Racing","Recing Car")

obj2.getTrack()