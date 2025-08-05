
 document.querySelector('form').addEventListener('submit',(event)=>{
 event.preventDefault()

let fname = document.getElementById('fname')
let sname = document.getElementById('sname')
let surname = document.getElementById('surname')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let password = document.getElementById('password')
let repassword = document.getElementById('repassword')
 cleareerr();
   namecheck(fname,sname,surname)
  contactcheck(email,phone)
passwordcheck(password,repassword);

 })



 let namecheck = (fname,sname,surname)=>{
  if(fname.value == ""){
    document.getElementById('fnameerr').innerText = 'Please enter first name';
    
  } 
  if(sname.value == ""){
    document.getElementById('snameerr').innerText = 'Please enter second name';
    
  }
  if(surname.value == ""){
     document.getElementById('surnameerr').innerText = 'Please enter surname';
    
  }
 }



 let contactcheck = (email,phone)=>{
     if(email.value == ""){
      document.querySelector('#emailerr').innerHTML = "Enter your email"
     }

     if(phone.value == ""){
      document.querySelector('#phoneerr').innerHTML = "Enter your Phone nmber"
     }
 }


 let passwordcheck= (password,repassword)=>{
     if(password.value == ""){
      document.querySelector('#passworderr').innerHTML = "Enter your password"
     } else {
  let pwdregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[^\s]{8,}$/;
    if(!pwdregex.test(password.value)){
      document.querySelector('#passworderr').innerHTML ="Password is  not valid format"
   console.log(password.value)
     }
    }
      if(repassword.value == ""){
      document.querySelector('#repassworderr').innerHTML = "Enter your password"
     } else{
       if(password.value != repassword.value){
        repassword.classList.add('is-invalid')
         document.querySelector('#repassworderr').innerHTML = "Password not match"
        }  else{

        }
     }
 }



  let cleareerr = ()=>{
    document.querySelectorAll('.error').forEach((ele) => {
  ele.innerHTML = "";
});

  }

