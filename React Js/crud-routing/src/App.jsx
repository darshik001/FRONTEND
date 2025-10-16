import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Component/Header'
import AddProduct from './Component/AddProduct'
import Home from './Component/Home'

function App() {

  return (
    <>
    <Header/>
      <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path='/addproduct' element={<AddProduct/>}/> 
        </Routes>     
    </>
  )
}

export default App
