import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Home from './Component/Home'
import AddProduct from './Component/AddProduct'

function App() {

  return (
    <>
     <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/AddProduct' element={<AddProduct/>}/>
  </Routes>
    </>
  )
}

export default App
