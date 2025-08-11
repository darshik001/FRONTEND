let adddish = document.querySelector("#add-dish-form");
let adddishname = document.querySelector("#add-dishname");
let adddishprice = document.querySelector("#add-dishprice");

let dishdetail = document.querySelector("#dish-details");

let editdish = document.querySelector('#edit-dish-form')
let editdishname = document.querySelector('#edit-dishname')
let editdishprice = document.querySelector('#edit-dishprice')

adddish.addEventListener("submit", (e) => {
  e.preventDefault();
  let dish = JSON.parse(localStorage.getItem("dish")) || [];
  if (adddishname.value == "" || adddishprice.value == "") {
    alert("Enter Value First");
  } else {
    if (dish.find((ele) => ele.name == adddishname.value)) {
      alert("Dish alredy Exist");
    } else {
      let data = {
        name: adddishname.value,
        price: adddishprice.value,
      };

      dish.push(data);
      localStorage.setItem("dish", JSON.stringify(dish));
    }
  }
});


let showmenu = ()=>{
  let dish = JSON.parse(localStorage.getItem("dish")) 
  if(dish.length == 0){
    alert("No Dish avlible")
  }else{
    let data=''
   
    
    dish.forEach((ele,index) => {
         let obj = `
            <tr class="text-center text-white">
               <td>${index +1}</td>
               <td>${ele.name}</td>
               <td>${ele.price}</td>
               <td>
               <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#edit-dish-modal" onclick="handaleditdish(${index})">Edit</button>
               </td>

            </tr>
         `  
         data+= obj;
    });
    dishdetail.innerHTML = data;
  }

}

showmenu()


let handaleditdish = (id)=>{
  let dish = JSON.parse(localStorage.getItem("dish"))
editdishname.value = dish[id].name
editdishprice.value = dish[id].price



editdish.addEventListener('submit',(e)=>{
  e.preventDefault()
  if(editdishname.value == "" || editdishprice.value == ""){
    alert('Enter Value First')
  } else{
 

      dish[id].name = editdishname.value 
      dish[id].price = editdishprice.value 
      localStorage.setItem("dish", JSON.stringify(dish));
      bootstrap.Modal.getInstance(document.querySelector('#edit-dish-modal')).hide();
      showmenu()

   
  }

})

}

let arr = [
      
      {name:"Paneer Pakoda"      ,price:220},
      {name:"Palak Paneer"       ,price:170},
      {name:"Veg Burger"         ,price:110},
      {name:"Veg Grill  Sandwich",price:160},
      {name:"Veg Fry rice"       ,price:160},
      {name:"Veg Biryani"        ,price:150},
      {name:"Mix Veg Pizzah"     ,price:350},
      {name:"Jeera Rice"         ,price:450},
      {name:"Potato Cheeps"      ,price:160},
      {name:"Masala Dosa"        ,price:80},
      {name:"Momos"              ,price:90},
      {name:"Franki"             ,price:90},
      {name:"Sweet Corn"         ,price:140},

      {name:"Gulab Jamun"        ,price:60},
      {name:"Kulfi"              ,price:40},
      {name:"Vanil Ice-Cream"    ,price:70},
      {name:"Chocolate Ice-Cream",price:80},
      {name:"chocolate Cake"     ,price:500},

      {name:"Thums-Up"           ,price:35},
      {name:"Mountain duo"       ,price:30},
      {name:"Mazza"              ,price:35},
      {name:"Sosyo"              ,price:25},
      {name:"Mile"               ,price:50},
      {name:"Chocolat Milk"      ,price:80},
      {name:"Water"              ,price:30},

];
console.log(arr)
let data = JSON.stringify(arr)

localStorage.setItem('dish',data)