

document.querySelector('#searchmovie').addEventListener('click',()=>{
    let searchData = document.querySelector('#serachmoviename').value 
    let moiveData = document.querySelector('#moviedata')
    fetch(`http://www.omdbapi.com/?t=${searchData}&apikey=5612ff15`)
    .then(res => res.json())
    .then(data =>{
      
       let row = `
     <div class="col-3">
      <div class="card bg-black text-white">
      <img src="${data.Poster}" class="card-img-top" width="200px" height="300px">
      <div class="card-body  p--2 mt-4">
     
      <p class="card-text text-center">Download ${data.Title} (${data.Year}) Dual Audio (${data.Language}) WEB-DI 480p [550MB] || 720p [1.5GB] || 1080p [2.6GB]</p>
      </div>
      </div>
     </div>
       `
       moiveData.innerHTML = row
    })
    .catch(err => console.log(err.message))
})