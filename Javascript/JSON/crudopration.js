
let addproduct = document.querySelector('#addproduct-form')
let ImgUrl = document.querySelector('#img-url')
let title = document.querySelector('#title')
let description = document.querySelector('#description')
let price = document.querySelector('#price')
let showproduct = document.querySelector('#showproduct')



// edit 
let editproduct = document.querySelector('#editproduct-form')
let editImgUrl = document.querySelector('#editimg-url')
let edittitle = document.querySelector('#edittitle')
let editdescription = document.querySelector('#editdescription')
let editprice = document.querySelector('#editprice')
let editindex = null
// add opration 


function generateID() {
  return  Date.now() +  Math.floor(Math.random() * 100000);
}



addproduct.addEventListener('submit', (e) => {
  e.preventDefault();
  let product = JSON.parse(localStorage.getItem("products")) || []
  if ((ImgUrl.value == "" || title.value == "" || description.value == "" || price.value == "")) {
formvalidation()
    console.log("not run")
  } else {
    let item = {
      id : generateID(),
      url: ImgUrl.value,
      title: title.value,
      description: description.value,
      price: price.value
    }
    product.push(item)
    localStorage.setItem("products", JSON.stringify(product))
    showproductpage()
    addproduct.reset()
  }


})


let formvalidation = () => {
  let url_err = document.querySelector('#url-err');
  let title_err = document.querySelector('#title-err');
  let description_err = document.querySelector('#description-err')
  let price_err = document.querySelector('#price-err')

  if (ImgUrl.value == "") {
    url_err.innerHTML = "Enter value";
  //   setTimeout(() => {
  //     url_err.innerHTML = "";

  //   }, 5000);
  }


  if (title.value == "") {
    title_err.innerHTML = "Enter value";
    // setTimeout(() => {
    //   title_err.innerHTML = "";

    // }, 5000);
  }

  if (description.value == "") {
    description_err.innerHTML = "Enter value";
    // setTimeout(() => {
    //   description_err.innerHTML = "";

    // }, 5000);
  }

  if (price.value == "") {
    price_err.innerHTML = "Enter value";
    // setTimeout(() => {
    //   price_err.innerHTML = "";

    // }, 5000);
  }
}



let showproductpage = () => {
  let product = JSON.parse(localStorage.getItem("products")) || []
 let data = "";
  product.forEach((element,index) => {
    let page = `
          <div class=" col-6 col-md-4 col-lg-3 mb-3">
          <div class="card">
            <img src="${element.url}" class="card-img-top" alt="..." height="200px">
          <div class="card-body bg-secondary">
            <h5 class="card-title text-center">${element.title}</h5>
            <p class="card-text overflow-y-scroll" style="height:100px">${element.description}</p>
            <h3 class="text-center mb-3">${element.price}</h3>
            <div class="d-flex justify-content-around">
            <a href="#" class="btn btn-primary"onclick="edtiitem(${index})">edit</a>
            <a href="#" class="btn btn-danger" onclick="deleteitem(${index})">Delete</a>
            <a href="#" class="btn btn-primary" onclick="addtocart(${index})">Cart</a>
            </div>
  </div>
</div>
          </div>
          `
          data += page
  });

  showproduct.innerHTML  = data

}

showproductpage()


let deleteitem = (id) => {
  let product = JSON.parse(localStorage.getItem("products")) || []
   
  product.splice(id,1);
    localStorage.setItem("products", JSON.stringify(product))
    showproductpage()
  
}


let edtiitem = (id)=>{
  editindex = id
      document.querySelector('#edit-section').style.display = "block"
      showproduct.style.display = "none"
  let product = JSON.parse(localStorage.getItem("products"))
  product = product[id]
         editImgUrl.value = product.url,
         edittitle.value = product.title,
         editdescription.value = product.description,
         editprice.value = product.price

}


editproduct.addEventListener('submit',(e)=>{
  e.preventDefault()
  let product = JSON.parse(localStorage.getItem("products"))
  product[editindex] = {
     url:editImgUrl.value,
     title:edittitle.value,
     description:editdescription.value,
     price:editprice.value,
  } 
  
    localStorage.setItem("products", JSON.stringify(product))
     document.querySelector('#edit-section').style.display = "none"
      showproduct.style.display = "flex"
  showproductpage()
   editindex = null
})





// addtocart 
let addtocartpage = document.querySelector('#addtocart')
console.log(addtocartpage)

let addtocart = (id)=>{
  let product = JSON.parse(localStorage.getItem("products"))
  let addcard = JSON.parse(localStorage.getItem('addcart')) || []
let  exist = false
    addcard.forEach((element)=>{
          if(element.id === product[id].id){
              exist = true
          } 
    })

    if(exist === false){
addcard.push(product[id])
  localStorage.setItem('addcart',JSON.stringify(addcard))
showaddtocart()
    }  else{
      alert("alredy added")
    }
}

let showaddtocart = ()=>{
  let addcard = JSON.parse(localStorage.getItem('addcart'))

let data = "";
  addcard.forEach((element,index)=>{
        let page = `
          <div class=" col-6 col-md-4 col-lg-3 mb-3">
          <div class="card">
            <img src="${element.url}" class="card-img-top" alt="..." height="200px">
          <div class="card-body bg-secondary">
            <h5 class="card-title text-center">${element.title}</h5>
            <p class="card-text overflow-y-scroll" style="height:100px">${element.description}</p>
            <h3 class="text-center mb-3">${element.price}</h3>
            <div class="d-flex justify-content-around">
            <a href="#" class="btn btn-primary"onclick="removeaddtocart(${index})">Buy Now</a>
            <a href="#" class="btn btn-outline-danger"onclick="removeaddtocart(${index})">remvoe</a>
            </div>
  </div>
</div>
          </div>
          `
          data += page
  })
  addtocartpage.innerHTML = data
     
}

showaddtocart()


let removeaddtocart = (id)=>{
  let addcard = JSON.parse(localStorage.getItem('addcart'))
     addcard.splice(id,1)
     localStorage.setItem('addcart',JSON.stringify(addcard))
     showaddtocart()
}