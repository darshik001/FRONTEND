import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, GetAllProductAction } from "../Services/Action/ProductAction"
import { Button, Container, Table } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"


export const Home = () => {
    const { products } = useSelector((state) => state)
    const dispatch = useDispatch()
    const naviget = useNavigate()
    useEffect(() => {
        dispatch(GetAllProductAction())
        console.log(products)
    }, [])

  const handalDelete=(id)=>{
      dispatch(deleteProduct(id))  
  }


  const handalEdit=(id)=>{
     naviget(`/edit-product/${id}`)
  }
    return (
        <>

            <Container>
                <Table>
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>IMG</th>
                            <th>NAME</th>
                            <th>CATAGARY</th>
                            <th>PRICE</th>
                            <th>STOCK</th>
                            <th>DESCRIPTION</th>
                            <th colSpan={2}>ACTION</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {
                            products.map((product) =>
                                <tr className='align-middle' key={product.id}>
                                    <td>{product.id}</td>
                                    <td><img src={product.image} height={100} /></td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.description}</td>
                                    <td><Button onClick={()=>handalEdit(product.id)} >Edit</Button> </td>
                                    <td> <Button variant="danger" onClick={()=>handalDelete(product.id)} >Delete</Button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

