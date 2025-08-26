
// ******  SET METHOD  ******

// let data = new Set([10,20,30,40,50,60,70])

// data.add(80)
// data.add(10)  //duplicat data not add this valu is overright
// data.clear() //delete all data
// data.delete(20) //delete only one data 
// console.log(data.has(50))   //chack data is exist or not
// console.log(data.keys())   // return key(index) index is smae is value
// console.log(data.values())   //  return value of all
// console.log(data.size)   // return length of array
// data.forEach(e=> console.log(e))
// console.log(data.entries())


// console.log(data)


//******   MAP MATHOD  ******

let data = new Map([
  [1,"darshik"],
  [1,"darshik"],// sam value not added
  [2,"jaydip"],
])

data.set(3,'luv')
data.clear()
data.delete(1)
console.log(data.get(1))  // get data in key and return value
console.log(data.has(1))  //check is exsit or not
console.log(data.keys())   // return all keys
console.log(data.values())   // return all value
console.log(data.size)          // return lenght of object
data.forEach(e=>console.log(e))   // return key and value
console.log(data.entries())



console.log(data)