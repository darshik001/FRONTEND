

// document.querySelector('button').addEventListener('click',()=>{
//   let xhr =new XMLHttpRequest ();

// xhr.open("GET",'text.txt')

// xhr.onload =   function(){
//      let data = this.responseText
//      document.querySelector('p').innerHTML = data
// }

// xhr.send()
// })

let ul = document.querySelector('ul')

// document.querySelector('button').addEventListener('click',()=>{
//   let xhr =new XMLHttpRequest ();

// xhr.open("GET",'https://jsonplaceholder.typicode.com/todos/')

// xhr.onload =   function(){
//      let data = JSON.parse(this.responseText)
//      data.forEach((element)=>{
//         let li =   document.createElement("li")
//     li.innerHTML = element.title
//     li.append("class",'text-danger')
//          ul.append(li)
//      })
    
// }

// xhr.send()
// })
document.querySelector('button').addEventListener('click',()=>{

   fetch("https://jsonplaceholder.typicode.com/todos")
   .then(res => res.json())
   .then((data)=>{
    data.forEach((element)=>{
let li =   document.createElement("li")
    li.innerHTML = element.title
         ul.append(li)
    })
    
        
   })
   .catch((err) =>{
console.log("ERROR",err)
   } )

  });