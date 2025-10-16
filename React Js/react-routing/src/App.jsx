import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Component/Header'
import FAQ from './Component/FAQ'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'

function App() {

  return (
    <>
       <Header/>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact/:name' element={<Contact/>}/>
      <Route path='/faq' element={<FAQ/>}/>
     
     </Routes>
    </>
  )
}

export default App
