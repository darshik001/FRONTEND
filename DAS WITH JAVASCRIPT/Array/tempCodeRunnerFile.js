let arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log("Orignal Array:")
for(let i=0;i<arr.length;i++){
  let temp = []
  for(let j=0;j<arr[i].length;j++){
   temp[temp.length] = arr[i][j]
  }
  console.log(temp)
}