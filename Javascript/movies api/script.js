
  
  document.querySelector("button").addEventListener('click',()=>{
    let searchData = document.querySelector('#search').value 
    let moiveData = document.querySelector('#moviedata')
    fetch(`http://www.omdbapi.com/?t=${searchData}&apikey=5612ff15`)
    .then(res => res.json())
    .then(data =>{
         let img  = document.createElement("img")
         img.setAttribute('src',data.Poster)
         img.setAttribute('class',"rounded rounded-3")
         img.style.height = "300px"
         img.style.width = "300px"
         moiveData.append(img)

        let h2  = document.createElement("h2")
        h2.innerHTML = data.Title
        h2.setAttribute('class',"text-center mt-3 fw-bolder")
        moiveData.append(h2)

        let li = document.createElement('li')
        li.innerHTML =  "<strong>Actors : </strong> "  + data.Actors
        moiveData.append(li)
        let li2 = document.createElement('li')
        li2.innerHTML = "<strong>Director : </strong> " + data.Director
        moiveData.append(li2)
    
    })
    .catch(err => console.log(err.message))
  })