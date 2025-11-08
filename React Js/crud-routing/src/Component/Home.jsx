import { Container, Table } from "react-bootstrap"
import { getStorageData } from "../Services/localstorageData"
import { useEffect,useState } from "react"

const Home=()=> {
  const [products, setproducts] = useState(getStorageData())
 useEffect(() => {
 
   setproducts(getStorageData())
 },[])
 
  return (
    <>
     <section className="p-5 m-5">
         <Container>
        <h1 className="mb-4">products</h1>
      
          <Table>
           <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Catagory</th>
              <th>description</th>
              <th>price</th>
              <th colSpan={2}>Action</th>
            </tr>
           </thead>
           <tbody>
            { products.map((product,index)=>
              <tr className="align-middle" key={product.id}>
                <td>{index +1}</td>
                <td><img src={product.image} height={80} /></td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td><button className="btn btn-primary" >edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
            )

            }
           </tbody>
         
          </Table>
     
      </Container>
     </section>
    </>
  )
}

export default Home