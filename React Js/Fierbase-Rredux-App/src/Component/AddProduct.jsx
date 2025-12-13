import generateUniqueId from 'generate-unique-id';
import  { useEffect, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { FaTags, FaTag, FaDollarSign, FaBoxes, FaImage ,FaInfo  } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {  AddProductActionAsync } from './Service/Action/ProductAction';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { imageCloud } from './Service/ImageStorage/ImageStorage';
const AddProduct=()=> {
const dispatch = useDispatch()
  const naviget = useNavigate()
  const {isCreated,erroMSG} = useSelector((state)=>state.AddProductRedux)
useEffect(() => {
    if (erroMSG) {
      toast.error(erroMSG, {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  }, [erroMSG]);

  
    const initialvalue ={
    id:"",
    category:"",
    name:"",
    description:"",
    price:"",
    stock:"",
    image:""
  }
    const [inputForm,setinputForm] = useState(initialvalue);
  

    const handalchang = (e)=>{
        const {name,value} = e.target
    
        setinputForm({
          ...inputForm,
          [name] :value
        })
      }


const handleImage = async(e) => {
      let url = await imageCloud(e.target.files[0]);
console.log(url)
      setinputForm({
        ...inputForm,
        image: url
      })
    }

      const handalsubmit =(e) =>{
        e.preventDefault()
    
         inputForm.id  ="DL"+ generateUniqueId({
          length:10,
           useLetters:false,
         }) 
               dispatch(AddProductActionAsync(inputForm))   
               
      }

      useEffect(()=>{
   if(isCreated){
    
setinputForm(initialvalue) 
     naviget('/')
   }
      },[isCreated])
  return (
    <>
       <Container fluid className="crud-container d-flex justify-content-center align-items-center">
         <Row className="justify-content-center">
        {erroMSG ? <ToastContainer/>:""}

           <Col >
             <div className="form-card rounded-5 w-100 p-5 bg-white">
               <div className="form-header text-center mb-5">
                 <h2 className="fw-bold h2">Add New Product</h2>
                 <hr />
               </div>
   
               <Form onSubmit={handalsubmit}>
                 <Row>
                   {/* Category */}
                   <Col md={6} className="mb-3">
                     <Form.Label>
                       Category <span className="text-danger">*</span>
                     </Form.Label>
                     <InputGroup>
                       <InputGroup.Text><FaTags /></InputGroup.Text>
                       <Form.Select name="category" value={inputForm.category} onChange={handalchang}>
                         <option value="">Select Category</option>
                         <option value="Clothing">Clothing</option>
                         <option value="Electronic">Electronic</option>
                         <option value="Grosery">Grosery</option>
                         <option value="Jewellery">Jewellery</option>
                       </Form.Select>
                     </InputGroup>
                   </Col>
   
                   {/* Name */}
                   <Col md={6} className="mb-3">
                     <Form.Label>
                       Product Name <span className="text-danger">*</span>
                     </Form.Label>
                     <InputGroup>
                       <InputGroup.Text><FaTag /></InputGroup.Text>
                       <Form.Control type="text" name="name" value={inputForm.name} onChange={handalchang} />
                     </InputGroup>
                   </Col>
                 </Row>
   
                 <Row>
                   {/* Price */}
                   <Col md={6} className="mb-3">
                     <Form.Label>
                       Price <span className="text-danger">*</span>
                     </Form.Label>
                     <InputGroup>
                       <InputGroup.Text><FaDollarSign /></InputGroup.Text>
                       <Form.Control type="number" name="price" value={inputForm.price} onChange={handalchang} />
                     </InputGroup>
                   </Col>
   
                   {/* Stock */}
                   <Col md={6} className="mb-3">
                     <Form.Label>
                       Stock <span className="text-danger">*</span>
                     </Form.Label>
                     <InputGroup>
                       <InputGroup.Text><FaBoxes /></InputGroup.Text>
                       <Form.Control type="number" name="stock" value={inputForm.stock} onChange={handalchang} />
                     </InputGroup>
                   </Col>
                 </Row>
   
                 {/* Image */}
                 <Form.Group controlId="image" className="mb-4">
                   <Form.Label>
                     Image URL <span className="text-danger">*</span>
                   </Form.Label>
                   <InputGroup>
                     <InputGroup.Text><FaImage /></InputGroup.Text>
                     <Form.Control type="file"multiple name="image"  onChange={handleImage} />
                   </InputGroup>
                 </Form.Group>
   
                  {/* Description */}
                 <Form.Group controlId="image" className="mb-4">
                   <Form.Label>
                     Description <span className="text-danger">*</span>
                   </Form.Label>
                   <InputGroup>
                     <InputGroup.Text><FaInfo /></InputGroup.Text>
                     <Form.Control as="textarea"  name="description" value={inputForm.description} onChange={handalchang} />
                   </InputGroup>
                 </Form.Group>
   
                 {/* Submit Button */}
                 <div className="text-center">
                   <Button type="submit" className="btn border-0 submit-btn p-2 w-50">
                     Add Product
                   </Button>
                 </div>
               </Form>
             </div>
           </Col>
         </Row>
   
      
       </Container>
   
      
        </>

  )
}

export default AddProduct