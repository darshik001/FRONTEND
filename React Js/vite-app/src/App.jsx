
import { useState } from 'react'
import './App.css'
import FunCom from './Component/FunCom'
import StaticList from './Component/StaticList'
import Daynamic from './Component/Daynamic'
import UseRef from './Component/UseRef'

function App() {
   const [list,setlist] = useState(["Home","Servise","Blog","About","Contact","Help"])
  return (
    <div>   
      {/* <FunCom name='Function Component'/> */}
      <StaticList list={list}/>
      <Daynamic list={list}/>
      <UseRef/>
    </div>
  )
}

export default App
