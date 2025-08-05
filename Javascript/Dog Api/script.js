

// document.querySelector('#fetchbtn').addEventListener('click',()=>{
//    fetch("https://dog.ceo/api/breeds/image/random")
//    .then(res => res.json())
//    .then(data => {
//     console.log(data)
//      let img = document.createElement('img')
//      img.setAttribute  ("src",data.message);
//      img.style.height = "200px"
//      img.style.width = "200px"
//      img.style.margin = "10px"
//      document.querySelector('#DogImage').append(img)
//    })
//    .catch(err => console.log(err))
// })

setInterval(() => {
   



// document.querySelector('#fetchbtn').addEventListener('click',()=>{
 let xhr =new XMLHttpRequest()
 xhr.open("GET",'https://dog.ceo/api/breeds/image/random')
 xhr.onload = function(){
  let data = JSON.parse(this.responseText)
  let img = document.createElement('img')
     img.setAttribute  ("src",data.message);
     img.style.height = "200px"
     img.style.width = "200px"
     img.style.margin = "10px"
     document.querySelector('#DogImage').append(img)
 }
 xhr.send()
// })


}, 1000 * 60);