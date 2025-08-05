


let display = document.querySelector('#display');
let button = document.querySelectorAll("button");
 let  addstring = ""


let apendData = (value)=>{
  addstring +=value
        display.value = addstring
}

    let cleardata = ()=>{
      addstring = ""
      display.value = addstring;
    }


let result = ()=>{
      addstring = eval(addstring);
      display.value = addstring
}

let backspace = ()=>{
      addstring = addstring.slice(0,addstring.length-1);
      display.value = addstring;
}

button.forEach(button =>{
      button.addEventListener('click',()=>{
         let value = button.textContent
         


         if(value == "="){
        result()
         }else if(value =="C"){
             cleardata()
         }else if(value == "AC"){
             backspace()
         } else{
            apendData(value)
         }

      })
})