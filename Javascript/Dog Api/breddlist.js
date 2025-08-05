let select = document.querySelector('select')
fetch('https://dog.ceo/api/breeds/list/all')
.then(res=>res.json())
.then(data => {
   let breedList = Object.keys(data.message)
   breedList.forEach((list)=>{
     let option = document.createElement('option')
     option.setAttribute('value',list)
     option.innerHTML = list
    select.append(option)
   })
})


document.querySelector('button').addEventListener('click',()=>{
  fetch(`https://dog.ceo/api/breed/${select.value}/images`)
  // fetch('https://cors-anywhere.herokuapp.com/https://dog.ceo/api/breed/akita/images/')
  .then(res => res.json())
  .then(data => {
   let imageLsit = data.message
   imageLsit.forEach((images) =>{
     let img = document.createElement('img')
     img.setAttribute('src',images)
  img.style.height = "200px"
  img.style.width = "200px"
  img.style.margin = "15px"
  document.querySelector('#DogImgs').append(img)
   })


  })
  .catch(err => console.log(err))
})