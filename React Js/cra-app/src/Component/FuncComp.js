import React,{useState} from "react"

const FuncComp = ()=>{
  const [count,setcount]=useState(0)
 const handalclick=()=>{
     setcount(count+1)
  }
  return(
    <div>
     <h2>Func Componenet is called......</h2>
     <p>Count:{count}</p>
     <button onClick={handalclick}>click</button>
    </div>
  )
}


export default FuncComp