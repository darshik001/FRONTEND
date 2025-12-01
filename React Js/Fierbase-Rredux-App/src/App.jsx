import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Home from './Component/Home'
import AddProduct from './Component/AddProduct'
import EditProduct from './Component/EditProduct'
import SignIn from './Component/SignIn'
import SignUp from './Component/SignUp'

function App() {

  return (
    <>
     <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/AddProduct' element={<AddProduct/>}/>
    <Route path='/edit-Product/:id' element={<EditProduct/>}/>
  </Routes>
    </>
  )
}

export default App
