

$("form").on('submit',(event)=>{
 event.preventDefault()

let fname = $('#fname')
let sname = $('#sname')
let surname = $('#surname')
let email = $('#email')
let phone = $('#phone')
let password = $('#password')
let repassword = $('#repassword')

console.log(fname)
console.log(sname)

  cleareerr();
   namecheck(fname,sname,surname)
  contactcheck(email,phone)
passwordcheck(password,repassword);
 
})







let namecheck = (fname,sname,surname)=>{
  if(fname.val() == ""){
    $('#fnameerr').text('Please enter first name')
    
  } 
  if(sname.val() == ""){
    $('#snameerr').text('Please enter second name')
    
  }
  if(surname.val() == ""){
     $('#surnameerr').text('Please enter surname');
    
  }
 }



 let contactcheck = (email,phone)=>{
     if(email.val() == ""){
      $('#emailerr').text("Enter your email")
     }

     if(phone.val() == ""){
      $('#phoneerr').text ("Enter your Phone nmber")
     }
 }


 let passwordcheck= (password,repassword)=>{
     if(password.val() == ""){
     $('#passworderr').text("Enter your password")
     } else {
  let pwdregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[^\s]{8,}$/;
    if(!pwdregex.test(password.val())){
      $('#passworderr').text("Password is  not valid format")
   console.log(password.val())
     }
    }
      if(repassword.val() == ""){
      $('#repassworderr').text("Enter your password")
     } else{
       if(password.val() != repassword.val()){
         $('#repassworderr').text("Password not match")
        }  else{

        }
     }
 }



 let cleareerr = () => {
  $('.error').each((index, ele) => {
    $(ele).html('');
  });
};
