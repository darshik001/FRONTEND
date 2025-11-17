import { Button, Spinner, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProductsAsyc } from './Service/Action/ProductAction'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home=()=> {
  const dispatch = useDispatch()
  const naviget = useNavigate()
  const {products,isloading} = useSelector((state)=>state)


const handalDelete=(id)=>{
  dispatch(deleteProduct(id))
}

const handalEdit = (id)=>{
naviget(`/edit-product/${id}`)
}

useEffect(()=>{
  dispatch(getAllProductsAsyc())
},[])
  return (
    <>
   
    <h2>Products</h2>
   {
    isloading ? <Spinner/>: <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>img</th>
          <th>Catagary</th>
          <th>title</th>
          <th>Price</th>
          <th>stock</th>
          <th>desc</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
  {
    products.map((product)=>
       <tr className='align-middle' key={product.id}>
        <td>{product.id}</td>
        <td><img src={product.image} height={100}/></td>
        <td>{product.category}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{product.description}</td>
        <td><Button onClick={()=>handalEdit(product.id)}>Edit</Button> </td>
        <td> <Button onClick={()=>handalDelete(product.id)}>Delete</Button></td>
       </tr>
    )
  }
      </tbody>
    </Table>
   }
    </>
  )
}

export default Home