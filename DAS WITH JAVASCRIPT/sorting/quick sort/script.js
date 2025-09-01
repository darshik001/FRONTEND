
let arr = [10,12,19,15,20,25,9]

let sorting = (arr)=>{
if(arr.length<=1){
  return arr
}
let pivot = arr[arr.length-1]
let left = []
let rigth = []
for(let i = 0;i<arr.length-1;i++){
  if(arr[i]<pivot){
    left.push(arr[i])
  }else{
    rigth.push(arr[i])
  }
}
return [...sorting(left),pivot,...sorting(rigth)]


}

console.log(sorting(arr))