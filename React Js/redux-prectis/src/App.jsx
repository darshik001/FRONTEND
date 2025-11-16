import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import AddProduct from './Component/AddProduct'
import { Home } from './Component/Home'
import EditProduct from './Component/EditProduct'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/edit-product/:id' element={<EditProduct/>}/>
      </Routes>
    </>
  )
}

export default App
