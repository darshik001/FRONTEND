
import { useState } from 'react'
import './App.css'
import FunCom from './Component/FunCom'
import StaticList from './Component/StaticList'
import Daynamic from './Component/Daynamic'
import UseRef from './Component/UseRef'
import Controlled from './Component/Controlled'
import Uncontrolled from './Component/Uncontrolled'

function App() {
   const [list,setlist] = useState(["Home","Servise","Blog","About","Contact","Help"])
  return (
    <div>   
      {/* <FunCom name='Function Component'/> */}
      {/* <StaticList list={list}/>
      <Daynamic list={list}/>
      <UseRef/> */}

      <Controlled/>
      <Uncontrolled/>
    </div>
  )
}

export default App
