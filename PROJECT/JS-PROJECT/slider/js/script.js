

let imgObj = [
  {
    img:"https://images.unsplash.com/photo-1750232533953-80b7740a85b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
  },
  {
    img:"https://images.unsplash.com/photo-1750688650387-48fbdc7399b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
  },
  {
    img:"https://images.unsplash.com/photo-1751104495904-174866993796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1750769668699-4fd606741391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D"
  },
  {
    img:"https://plus.unsplash.com/premium_photo-1666666222364-7479e7347833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
  },
]


let index = 0;
let breakid ;

let slide = ()=>{

  document.querySelector("#slider-images").setAttribute('src',imgObj[index].img)
}

let autoslide = ()=>{
   breakid  =  setInterval(()=>{
     document.querySelector("#slider-images").setAttribute('src',imgObj[index].img)
    if(index == imgObj.length-1){
      index = 0;
    } else{
      index++;
    }

   },2000)

  }
  slide()
 autoslide()

 document.querySelector('#prev').addEventListener('click',()=>{
      clearInterval(breakid)
      if(index == 0){
        index = imgObj.length-1;
      } else{
        index--;
      }
      slide()
      console.log(breakid)
      autoslide();
      
   })

   document.querySelector('#next').addEventListener('click',()=>{
      clearInterval(breakid)
      if(index == imgObj.length - 1){
        index = 0
      } else{
        index++
      }
      slide()
       autoslide();
   })