let dname=document.querySelector('#name')
let dname1=document.querySelector('#name1')
let texpenses=document.querySelector("#total-expenses")

// login and signup from input 
let sname = document.querySelector('#sname')
let semail = document.querySelector('#semail')
let spassword = document.querySelector('#spassword')
let lemail=document.querySelector('#lemail')
let lpassword=document.querySelector('#lpassword')

// login and signup from 
let sform = document.querySelector('#signup-from')
let lform = document.querySelector('#login-from')


// ADD EXPENSE VALUE
let ename=document.querySelector('#expense-name')
let eamount=document.querySelector('#expense-amount')
let ecategory = document.querySelector('#expense-category')

//ADD EXPENSE FORM
let efrom = document.querySelector('#expense-form')

let etable  = document.querySelector('#expenses-table')



// EDIT EXPENSE DETIELS 
let editexpenseform = document.querySelector('#expenseedit-form') 

let exname = document.querySelector('#edit-expense-name')
let examount = document.querySelector('#edit-expense-amount')
let excategory = document.querySelector('#edit-expense-category')


// FILTER ELEMENT
let filter = document.querySelector('#expense-filter')
let clearfilter= document.querySelector('#clear-filter')
//SIGNUP FORM VALIDATION
sform.addEventListener('submit',(e)=>{
  e.preventDefault()
  let users = JSON.parse(localStorage.getItem("users")) || []
  if(users.find((element)=>element.email == semail.value)){
     alert('user alredy exist')
  }   else{
      let suser = {
        id:IdGenretor(),
        name:sname.value,
        email:semail.value,
        password:spassword.value,
        expense:[]
      }

      users.push(suser)
      localStorage.setItem("users",JSON.stringify(users))
      setcuurentuser(suser.id)
      showhomepage()
  
      showexpense()
      }
      sform.reset()
})
 


//LOGIN FORM VALIDATION
  lform.addEventListener('submit',(e)=>{
    e.preventDefault()
  let users = JSON.parse(localStorage.getItem("users"))
  if(users.find((ele)=>ele.email ==lemail.value &&ele.password == lpassword.value)){
    users.forEach((element) => {
           if(element.email === lemail.value && element.password === lpassword.value){

            setcuurentuser(element.id)
            showexpense()
     

             showhomepage()
          

           }
          });
        } else{
          alert("user not found")
        }
        lform.reset()

  })



// SET CUURENT USER
let setcuurentuser = (id)=>{
      localStorage.setItem("currntuser",JSON.stringify(id))
}


//SHOW HOME PAGE YA LOGIN
let showhomepage = ()=>{
  let cuurntuser = JSON.parse(localStorage.getItem("currntuser"))
  let users = JSON.parse(localStorage.getItem("users"))

     if(cuurntuser){
      document.querySelector('#form-container').style.display = "none"
      document.querySelector('#allpage').style.display = "block"
      users.find((ele)=>{
        if(cuurntuser == ele.id){

          dname.innerHTML = ele.name
          dname1.innerHTML = ele.name
        }
      })
      
     }  else{
      document.querySelector('#allpage').style.display = "none"
      document.querySelector('#form-container').style.display = "block"

     }

}
 
//  DEPENT CUURNET USER TRUE THE SHOE ALL PAGE THEN LOGIN PAGE 
 showhomepage()



 

 //SHOW LOGIN FORM
 let showloginform = ()=>{
  document.querySelector('#signup-container').style.display="none"
  document.querySelector('#login-container').style.display="block"
 }


 //SHOW SIGNUP FORM
 let showsignupform = ()=>{
 document.querySelector('#signup-container').style.display="block"
  document.querySelector('#login-container').style.display="none"
 }


 // LOGOUT FUNCTION
let handallogout =()=>{
  localStorage.removeItem("currntuser")
  showhomepage()
  showloginform()
}

 let IdGenretor = ()=>{
  return Math.floor(Math.random(1000000) *9999999)
 }

 

 efrom.addEventListener('submit',(e)=>{
  e.preventDefault()
  let users = JSON.parse(localStorage.getItem("users"))
  let cuurant = JSON.parse(localStorage.getItem('currntuser'))
    users.forEach((element)=>{
       if(element.id == cuurant){
        
        let obj= {
          name:ename.value,
          amount:eamount.value,
          category:ecategory.value
        }
        let expense =  element.expense
       expense.push(obj)
      localStorage.setItem("users",JSON.stringify(users))
      showexpense()
       }
    })
  efrom.reset()
 })


 let showexpense= ()=>{
    let users = JSON.parse(localStorage.getItem("users"))
  let cuurant = JSON.parse(localStorage.getItem("currntuser"))

    users.forEach((element,uindex)=>{
       if(element.id == cuurant){
       
        let expense =  element.expense
        let data = ""
        let totalexpense = 0

        if(expense.length == 0){
          document.querySelector('#expenses-list').style.display = "block"
          document.querySelector('#expense-hedar').style.display = "none"
        } else{
          document.querySelector('#expenses-list').style.display = "none"
          document.querySelector('#expense-hedar').style.display = "table-header-group"

        }
        expense.forEach((ele,index)=>{
        let tr  = `
          <tr>
                <td>${index +1}</td>
                <td>${ele.name}</td>
                <td>$${ele.amount}</td>
                <td>${ele.category}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="expenseedit(${uindex},${index})"data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="bi bi-pencil"></i>
                    </button>
          <button class="btn btn-sm btn-outline-danger" onclick="expensedelete(${uindex},${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td> 
          </tr>  

        `
        
          data += tr
          totalexpense +=Number(ele.amount)
        })
        etable.innerHTML = data
       texpenses.innerHTML = totalexpense

       }
    })
 }

 showexpense()

let expensedelete = (uindex,index)=>{
    let users = JSON.parse(localStorage.getItem("users"))
  
users[uindex].expense.splice(index,1)
      localStorage.setItem("users",JSON.stringify(users))
    showexpense()
}


let expenseedit = (uindex,index)=>{
    let users = JSON.parse(localStorage.getItem("users"))
   let data= users[uindex].expense[index]
   exname.value = data.name;
   examount.value = data.amount;
   excategory.value = data.category
  

   editexpenseform.addEventListener('submit',(e)=>{
    e.preventDefault()
    users[uindex].expense[index].name = exname.value
    users[uindex].expense[index].amount = examount.value
    users[uindex].expense[index].category = excategory.value
    localStorage.setItem("users",JSON.stringify(users))
    showexpense()
    bootstrap.Modal.getInstance(document.querySelector('#exampleModal')).hide();
})
}


filter.addEventListener('change',()=>{
   let users = JSON.parse(localStorage.getItem("users"))
  let cuurant = JSON.parse(localStorage.getItem("currntuser"))
    
    if (filter.value === "") {
    showexpense();
    return;
  }


    users.forEach((element,uindex)=>{
       if(element.id == cuurant){
       
        let expense =  element.expense
        let data = ""
        let totalexpense = 0
        let srno = 0 
        expense.forEach((ele,index)=>{
          if(ele.category == filter.value){
            srno ++
        let tr  = `
          <tr>
                <td>${srno}</td>
                <td>${ele.name}</td>
                <td>$${ele.amount}</td>
                <td>${ele.category}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="expenseedit(${uindex},${index})"data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="bi bi-pencil"></i>
                    </button>
          <button class="btn btn-sm btn-outline-danger" onclick="expensedelete(${uindex},${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td> 
          </tr>  

        `
        
          data += tr
          totalexpense +=Number(ele.amount)
        }
        })
  etable.innerHTML = data
       texpenses.innerHTML = totalexpense
       
      
      }
    })
  })

clearfilter.addEventListener('click',()=>{
  filter.value=""
  showexpense()
})