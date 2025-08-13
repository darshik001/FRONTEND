let d = [60,90,10,80,30,45,65,12,88,35]
let quick = (d) => {
    if (d.length <= 1) {
        return d;
    }
    let pivot = d[0];
    let left = []
    let right = []
    
    d.forEach((element , index) => {
        if (index === 0){
            return
        }
        if (element < pivot) {
            left.push(element);
        } else {
            right.push(element);
        }
    })
    return [...quick(left), pivot, ...quick(right)];
}


let arr = quick(d)

console.log(arr)

let Binaryseraching = (val)=>{
  let lower = 0;
  let higher = arr.length -1  //10
 

  while(lower <=higher ){
    let mid = Math.floor((lower + higher) /2)
   if(arr[mid] == val){
    return mid
   } else if(arr[mid]<val){
       lower = mid +1
   } else if(arr[mid]>val){
     higher = mid -1
   }
   
  }
      
   return -1
}

let index = Binaryseraching(45)

if(index !== -1){
  console.log(`Position Found In Index Number:${index}`)
} else{
  console.log(`Position Not Found`)
}