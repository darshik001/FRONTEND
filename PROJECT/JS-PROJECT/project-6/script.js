let data = [
  {
    img:"https://images.unsplash.com/photo-1749456289357-4e5cbffe9fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    img:"https://images.unsplash.com/photo-1749276873098-7e44bd10575c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    img:"https://images.unsplash.com/photo-1749449456588-ef30946060ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
  img:"https://images.unsplash.com/photo-1749387817193-0f9ab148b29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
  },
]

let index = 0;
let index2 = 1

let prev = ()=>{
  if(index == 0 ){
    index = data.length -1;
   
  }else{
    index--;
  }
  slide()
}

let next = ()=>{
   if(index == data.length -1 ){
    index = 0 ;
    
  }else{
    index++;
  }
  slide()
}


let slide = ()=>{
  document.getElementById("image").innerHTML = `<img class="images" src="${data[index].img}">`
}


slide()