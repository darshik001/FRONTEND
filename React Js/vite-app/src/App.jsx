
import { useState } from 'react'
import './App.css'
import FunCom from './Component/FunCom'
import StaticList from './Component/StaticList'
import DaynamicList from './Component/DaynamicList'
import UseRef from './Component/UseRef'
import Controlled from './Component/Controlled'
import Uncontrolled from './Component/Uncontrolled'
import Daynamic from './Component/Daynamic'
import Hoccop from './Component/HocCop'

const HocCoponetnt = Hoccop(Daynamic)
function App() {
   const [list,setlist] = useState(["Home","Servise","Blog","About","Contact","Help"])
  return (
    <div>   
      {/* <FunCom name='Function Component'/> */}
      {/* <StaticList list={list}/>
      <DaynamicList list={list}/>
      <UseRef/> */}

      {/* <Controlled/>
      <Uncontrolled/> */}

      {/* <Daynamic/> */}
      <HocCoponetnt/>
    </div>
  )
}

export default App
