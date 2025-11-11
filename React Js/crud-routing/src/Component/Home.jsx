import { Button, Container, Form, InputGroup, Table } from "react-bootstrap"
import { getStorageData } from "../Services/localstorageData"
import { useEffect,useState } from "react"
import { FaSearch,FaArrowUp,FaArrowDown   } from "react-icons/fa";
import { MdClear } from "react-icons/md";
const Home=()=> {
  const [products, setproducts] = useState(getStorageData())
  const [searchdata , setsearchData] = useState("")
 useEffect(() => {
 
   setproducts(getStorageData())
 },[])
 
 const handalSearch = ()=>{
  let searchingData = [...products].filter(
    (product)=> product.category.includes(searchdata)
  )
    setproducts(searchingData)
    setsearchData("")
 }

  const handalASE = ()=>{
    let sorData = [...products].sort((a,b)=>
    a.category.localeCompare(b.category)
    )
    setproducts(sorData)
  }

   const handalDES = ()=>{
    let sorData = [...products].sort((a,b)=>
    b.category.localeCompare(a.category)
    )
    setproducts(sorData)
  }

 const handalReset = ()=>{
  setproducts(getStorageData())
 }

  return (
    <>
     <section className="p-5 m-5">
         <Container>
        <h1 className="mb-4">products</h1>
           <Form>
            <InputGroup>
              <Form.Control type="text" value={searchdata} onChange={(e) => setsearchData(e.target.value)}/>
              <Button onClick={handalSearch}><FaSearch/></Button>
              <Button className="mx-2" onClick={handalASE}><FaArrowUp/></Button>
              <Button onClick={handalDES}><FaArrowDown/></Button>
              <Button className="ms-2"  onClick={handalReset}><MdClear/></Button>
            </InputGroup>
           </Form>
          <Table>
           <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>name</th>
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
                <td>{product.name}</td>
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