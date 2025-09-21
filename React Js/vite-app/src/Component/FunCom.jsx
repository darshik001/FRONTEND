import { useEffect, useState } from "react";
import imageUrl from '../assets/localimage.jfif' // this image is stor in loal machin then not  throw erros 
// import imageUrl from "https://images.pexels.com/photos/30253117/pexels-photo-30253117.jpeg" // this image is not a stor local machin then  trow error

const FunCom = ({name})=>{      //set a argument props and ande ricived a object  but {name} is destruct  object then use only name  
  const [count,setCount] = useState(0)
  const handalClick = ()=>{
    // setCount(count+1)
    setCount(count =>count+1)   // changes update in dom
  }


  // USEEFFECT 
  useEffect(()=>{
    console.log("every time Render")
  })

  useEffect(()=>{
    console.log("One Time Render ")
  },[])

  useEffect(()=>{
    console.log("Change count then Render ")
  },[count])
  return(
<div>
    <h1>Function Component..</h1>
    <h2>Name:{name}</h2>
    <h1>Counter:{count}</h1>
    <button onClick={handalClick}>Incriment</button>


    {/* how to set inline css/style */}
       <div style={{width:'200px',height:"200px",backgroundColor:'red',margin:"auto",marginTop:"20px"}}>this is Componet</div>


      {/* how to set a image   */}

<img src={imageUrl} alt="..." />

      {/* <img src="https://images.pexels.com/photos/33851801/pexels-photo-33851801/free-photo-of-woman-strolling-along-historic-padova-street.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy" alt="" /> */}



      {/* how to define class  */}

      <div className="classname"></div>

</div>

  )
}


 export default FunCom;