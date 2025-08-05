



try{
  let a = 10 ,b; 
  // let b = 5;
  // console.log(a/b)

  if(b == undefined){
    throw new Error ("This is error")
  }
} catch(error){
   console.log(error)
}finally
{
  console.log("finally is called")
}