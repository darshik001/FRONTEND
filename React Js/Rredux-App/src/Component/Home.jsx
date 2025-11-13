import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './Service/Action/ProductAction'
import { useEffect } from 'react'

const Home=()=> {
  const dispatch = useDispatch()
  const {products} = useSelector((state)=>state)
useEffect(()=>{

  dispatch(getAllProducts(products))
},[])
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
        </tr>
      </thead>
      <tbody>
  {
    products.map((product)=>
       <tr>
        <td>{product.id}</td>
        <td><img src={product.image}/></td>
        <td>{product.category}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{product.description}</td>

       </tr>
    )
  }
      </tbody>
    </Table>
    </>
  )
}

export default Home