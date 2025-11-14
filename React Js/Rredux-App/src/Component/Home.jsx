import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProducts } from './Service/Action/ProductAction'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home=()=> {
  const dispatch = useDispatch()
  const naviget = useNavigate()
  const {products} = useSelector((state)=>state)
useEffect(()=>{

  dispatch(getAllProducts(products))
},[])

const handalDelete=(id)=>{
  dispatch(deleteProduct(id))
}

const handalEdit = (id)=>{
naviget(`/edit-product/${id}`)
}
  return (
    <>
   
    <h2>Products</h2>
    <Table>
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
    </>
  )
}

export default Home