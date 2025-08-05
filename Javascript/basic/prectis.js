

// 1. Write a JS function that reverse a number. 

 let num = 15438;
     
   let revers = (num)=>{
        let rev = num.toString().split("").reverse().join("");
          rev  = Number(rev)
          // console.log(typeof rev)
          console.log(rev)
       
   }
revers(num)



// 2.Write a JS function that returns a passed string with letters in alphabetical order.

let char = "webmaster"
   
   let aplph = (str) =>{
       
    return str.split("").sort().join("")
   }

   console.log(aplph(char))



// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

let pera =  "the quick brown fox"


     let upper = (str)=>{
             console.log(str.split(" ").map(ele =>{
                  return ele.charAt(0).toUpperCase() + ele.slice(1)
              }).join(" "))
     }


    upper(pera)



// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.




let str = 'Web Development Tutorial'


     let  lognest = (str)=>{
  let word =str.split(" ");
       word.sort((a,b)=>a.length - b.length)
       return word[word.length-1]
     }

     console.log(lognest(str))




// 5. Write a JavaScript function that checks whether a number is perfect.


let perfectnumber = (num) => {
    let sum = 0;

    for(let i = 1; i <= num / 2; i++) {   
        if(num % i === 0) {
            sum += i;     
        }
    }

       if(sum=== num){
        console.log(`${num} is perfect `)
       } else{
        console.log(`${num} is not perfect `)
       }
  
}


perfectnumber(8128)



    

   