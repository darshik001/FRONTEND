
let data = [
   {
    "quote": "What you do today can improve all your tomorrows.",
    "author": "Ralph Marston"
  },
  {
    "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "author": "Zig Ziglar"
  },
  {
    "quote": "Intelligence without ambition is a bird without wings.",
    "author": "Salvador Dali"
  },
  {
    "quote": "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
    "author": "Epictetus"
  },
  {
    "quote": "We may encounter many defeats but we must not be defeated.",
    "author": "May Angelou"
  },
  {
    "quote": "Problems are not stop signs, they are guidelines.",
    "author": "Robert H. Schuller"
  },
]


// data.forEach(item=>{
//    console.log(item.quote)
//    console.log("-"+item.author)
// })


   
let index = 0;

let pre = ()=>{
  if(index==0){
    index = data.length -1
  }else{

    index--;
  }
  display() 
}


let next = ()=>{
  if(index == data.length -1){
    index = 0
  }else{
    index++
  }
  display()
}

let display = ()=>{
  document.getElementById("qoutes").innerHTML = data[index].quote
  document.getElementById("author").innerHTML = data[index].author
}

display();
  