import { Col, Container, Form, Row, Button, InputGroup, Card } from "react-bootstrap";
import { FaTags, FaTag, FaDollarSign, FaBoxes, FaImage ,FaInfo  } from "react-icons/fa";
import uniqueId from 'generate-unique-id'
import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/localstorageData";

const AddProduct = () => {
const handalstorage = ()=>{
   return  JSON.parse(localStorage.getItem('products')) || []
   }

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
  const [inputErr,setinputErr] = useState({});

 



  const handalchang = (e)=>{
    const {name,value} = e.target

    setinputForm({
      ...inputForm,
      [name] :value
    })
  }
  
  const handalsubmit =(e) =>{
    e.preventDefault()
      if(handalErros()){
        let data =  getStorageData()
      inputForm.id = uniqueId({
      length:10,
       useLetters:false,
       includeSymbols:['@','#','$']
     }) 
        data.push(inputForm)
        setStorageData(data)

        setinputForm(initialvalue)
      }
  }


  const handalErros = ()=>{
    let errors = {}

    if(inputForm.category === ""){
      errors.categoryErr = "Plase select category"
    }

    if(inputForm.name == ""){
      errors.nameErr = "Enter Product Name"
    }

    if(inputForm.price == 0){
      errors.priceErr = "Enter Price"
    }

    if(inputForm.stock==0){
      errors.stockErr = "Enter stock"
    }

    if(inputForm.image ==""){
      errors.imageErr = "Provied Image Url"
    }

    if(inputForm.description ==""){
      errors.descriptionErr = "Describe the Poduct"
    }

    setinputErr(errors)
    return Object.keys(errors).length === 0
  }

  const handalDelete =(id)=>{
    let data = handalstorage()
    let updateData = data.filter((ele)=> ele.id !=id)
    setStorage(updateData)
  }


  const handalEdit = (id)=>{
    let data = handalstorage()
  setedit(true)
   let findeingdata=  data.find((ele)=>ele.id ==id)
      setinputForm(findeingdata)
  }
  return (
    <>
    <Container fluid className="crud-container d-flex justify-content-center align-items-center">
      <Row className="justify-content-center">
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
                   {inputErr.categoryErr? <Form.Text className="text-danger">{inputErr.categoryErr}</Form.Text>:""}
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
                    {inputErr.nameErr? <Form.Text className="text-danger">{inputErr.nameErr}</Form.Text>:""}
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
                  {inputErr.priceErr? <Form.Text className="text-danger">{inputErr.priceErr}</Form.Text>:""}
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
                  {inputErr.stockErr? <Form.Text className="text-danger">{inputErr.stockErr}</Form.Text>:""}
                </Col>
              </Row>

              {/* Image */}
              <Form.Group controlId="image" className="mb-4">
                <Form.Label>
                  Image URL <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaImage /></InputGroup.Text>
                  <Form.Control type="text" name="image" value={inputForm.image} onChange={handalchang} />
                </InputGroup>
                {inputErr.imageErr? <Form.Text className="text-danger">{inputErr.imageErr}</Form.Text>:""}
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
                {inputErr.descriptionErr? <Form.Text className="text-danger">{inputErr.descriptionErr}</Form.Text>:""}
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
  );
};

export default AddProduct ;
