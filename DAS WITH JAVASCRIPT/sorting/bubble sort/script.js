
let arr = [0,20,15,9,14,19,12,16]


let sorting = (arr)=>{
  for(let i =0 ;i<arr.length;i++){
    for(let j = i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        let n = arr[i];
        arr[i] = arr[j]
        arr[j] = n
        
      }
    }

  }
console.log(arr)
}

sorting(arr)




