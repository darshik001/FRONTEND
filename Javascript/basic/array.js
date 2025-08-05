// Array is collection of Element

// Decleration

// let a = new Array(10,20,30,40,50)
//   let a = [10,20,30,40,50]
// console.log(a)

// a[1] = 60
// a[10] = 500
// a[7] = 300
// console.log(a)

// console.log(a.length)

// for(let i =0;i<a.length;i++){
//   console.log(a[i])
// }




                                      //*  ARRAY'S  METHODS  *\\



let data = [10,20,30,40,50]   
console.log(data)                                         

// // push method => add data in last position 
// console.log(data) 

// data.push(60)
// data.push(70,80,90)
// console.log(data)


// // pop method => delete(remove) data in last position 

// data.pop()      // onliy one data delete
// data.pop()
// data.pop()
// console.log(data) 


// // unshift method => add data in first position 

// data.unshift(5)
// data.unshift(2,3,4)
// console.log(data)


// // shift method => add data in first position 


// data.shift()   // onliy one data delete
// data.shift()
// console.log(data)


// splice () => add and remove data any position 

// data.splice(2,3)  //    that mens 2 is index starting point and 3 is wiche element remove index 2,3,4 is remove 
// console.log(data)
// data.splice(2,0,30,40,50)   //add data index 2 from 3 element
// console.log(data)


// some()  => this method is use to if match any one condition then true 
// let ans = data.some((ele,i)=>ele<20)
// console.log(ans)


// every() => this method is used to every condtion is true then return  true Otherwise false

// let ans = data.every((element,index)=> element < 51)
// console.log(ans)
      

// isArray() => this method is used to this is array or  not 
// let data2= 12;
// console.log(Array.isArray(data))
// console.log(Array.isArray(data2))


// includes() => this method is used to search element. if data fouond then return true otherwise return false

// let ans = data.includes(10,1)
// console.log(ans)


// filter() => this method is used to filter data 
// let ans =data.filter((ele,i)=>{
//         return ele<=30
// })
// console.log(ans)

// forEach()  this method used to print array 

//  data.forEach((ele,i)=>{
//   console.log(`${ele} => ${i}`)
//  })


// Map() => this method is used to create a copy of array 

// let ans = data.map((ele,i)=> ele)
// console.log(ans)




// from() => this method is uset to create a array 

// console.log(Array.from("darshik"))   //convert string to array ['d','a','r'....]
// let ans = Array.from([1,2,3,4,5,6],(ele,i)=> ele*i)
// console.log(ans)


// of() => this method is used to create a array 
// let ans = Array.of("darshik","shekhada")
// console.log(ans)

// at()=> this method is used to finde data using index  
// console.log(data.at(0))

// concat() => this method is used to marge two array in one 
// let data2 = [60,70,80,90,100]
// console.log(data2)
// let data3 = data.concat(data2)
// console.log(data3)


// copyWithin() => this methos is used to  0 index thi changes thase 3 index thsi copy thase 5  position aete ketli position suthi javanu che    index 3 upar 4 position hoy aetle 40 ane 50 copy thase 
// console.log(data.copyWithin(0,3,5))  



// entries() => this method is used to return index and valuse  (ket and pair) 

// let ieteation =data.entries()     
// ieteation.forEach((element,i) => {
//   console.log(element)
// });
// console.log(ieteation.next().value)
// console.log(ieteation.next().value)
// console.log(ieteation.next().value)



// fill()  this method is used to add smae data 

// data.fill(70,2,4)   //  position 3 to 4    mesne index 2 and 3
// data.fill(70,2)          //index 2 to end 
// data.fill(70)        //    all chang 
// console.log(data)

// find() => this method is used  to find data  finde first data and return thisdata not chechk second data
// let ans = data.find((ele,i)=> ele>20)
// console.log(ans)


// findIndex() => this method is used to check condition then condtion is true atthettime return index number or not return -1 
// let ans = data.findIndex((ele,i)=>ele>35 && ele<45)
// console.log(ans)


// findLast() =>  જે array માંથી પાછળથી (lastમાંથી) value શોધે છે જે આપેલી શરત (condition) match કરે — અને એ value પાછો આપે છે. પહેલી એવી value જે match થાય — એને આપો.


// let ans = data.findLast((ele,i)=> ele<30)
// console.log(ans)


// findLastIndex() => એ એવી method છે જે arrayને પાછળથી (અંતથી) ચેક કરે છે અને પહેલી value જે condition match કરે — એ valueનું index આપે છે.


// let ans = data.findLastIndex((ele)=>ele<40)
// console.log(ans)


// flat() =>એ JavaScript ની Array method છે, જે nested (અંદર અંદર હોતી) arraysને સીધી એક જ લાઈનમાં ફેરવી આપે છે.
// flat() એ 1 level સુધી flatten કરે છે.
//flat(2) હવે આખું array સીધું થઈ ગયું (2 level સુધી flatten)
// let data2 =  [0, 1, [2, [3, [4, 5,[6,[7,[8,[9]]]]]]]];
// console.log(data2.flat())
// console.log(data2.flat(2))
// console.log(data2.flat(3))
// console.log(data2.flat(7))
// console.log(data2.flat(Infinity))  


// let ans = data.flatMap((ele)=> ele==10?5:10)
// console.log(ans)


// join() => this method is used to join data thats mens [10,20,30] thne 10,20,30
// console.log(data.join())

// keys() this mehodis used to print key (index)

  // let ans  = data.keys()
  // ans.forEach(key => {
  //   console.log(key)
  // });

  
// lastIndexOf() => this method is used to finde partikular index 
  // console.log(data.lastIndexOf(40))


  // reduce() => this method is used to all data (+ - / *) caculation 
  // let ans = data.reduce((sum,indexvalue)=> sum +indexvalue)
  // console.log(ans)


  // reduceRight()=>this method is used to print reverse and concate the array 
// let data2=[
//   [1,2],[3,4],[5,6]
// ]
//   let ans =data2.reduceRight((acc,curr)=>acc.concat(curr))

//   console.log(ans)


// reverse() this method is used to print rever array
// console.log(data.reverse())


// console.log(data.slice(2))
// console.log(data.slice(2,4))
// console.log(data.slice(-4))//print 4 latst 4 data
// console.log(data.slice())


// sort() => this method is used to sort only first charecter array 

// let name =['d','a','r','s','h','i','k']
// console.log(name)
// console.log(name.sort())
// let data2 = [20,2,4,5,70,8,0,1,3,6,]
// console.log(data2)
// console.log(data2.sort())

// let data2 = [22,2,4,5,72,71,8,0,1,3,6]
// console.log(data2.toSorted())


