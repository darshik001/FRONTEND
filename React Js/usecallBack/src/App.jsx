import { useCallback, useState } from 'react'
import './App.css'
import Buttons from './Buttons'

function App() {
  const [count, setCount] = useState(0)
 const handalInc = useCallback(()=>{
  setCount(count =>count +1)
 },[])

 const handalDec = useCallback(()=>{
  setCount(count =>count -1)
 },[])

  return (
    <>
     <h2>Count - {count}</h2>
    <Buttons HandalEvent={handalInc} name={"incriment"}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Buttons HandalEvent={handalDec} name={"Decriment"}/>
    </>
  )
}

export default App
