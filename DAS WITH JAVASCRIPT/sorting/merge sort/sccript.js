let arr =[9,6,4,7,3,5,1]


let merge = (arr)=>{

  if (arr.length <= 1) return arr;

 let mid = Math.floor(arr.length/2)
 let right = merge(arr.slice(0,mid))
 let left = merge(arr.slice(mid))

return sortedarr(left,right)

}


let sortedarr = (left,right)=>{
   let result = []
   let i = 0,j=0;
   while(i <left.length && j < right.length){
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // Add any remaining items
  return result.concat(left.slice(i)).concat(right.slice(j));
   
}
console.log(merge(arr))
