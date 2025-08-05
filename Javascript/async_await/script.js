

document.querySelector('#fetchbtn').addEventListener('click',async()=>{
   let res = await fetch("https://dog.ceo/api/breeds/image/random")
   let data = await res.json()
   let img = document.createElement('img')
   img.setAttribute('src',data.message)
   img.setAttribute('width',"200px")
   img.setAttribute('height',"200px")
   document.querySelector('#DogImage').append(img)
   
})


let arr = [10,20,30,40,50,70,60,100,90,80]
let arr2 = [6,7,8,9]
// 1.
// console.log(arr.at(2))

// 2.
// let arr3 = arr.concat(arr2)
// console.log(arr3)

// 3.
// console.log(arr.copyWithin(0,2,3))

// 4.
// let ietret = arr.entries()
//  for(let i = 0;i<arr.length;i++){
//      console.log(ietret.next().value)
//  }


// 5.
// console.log(arr.every((curr)=>curr<60))

// 6.
// console.log(arr.fill(5,2,3))

// 7.
// console.log(arr.filter((val)=> val>30))

// 8.
// console.log(arr.find((ele)=>ele>20))

// 9.
// console.log(arr.findIndex((ele)=> ele==30))

// 10.
// console.log(arr.sort((a,b)=> a-b))

// 11.
// console.log(arr.slice(3,4))
// console.log(arr.slice(3))


