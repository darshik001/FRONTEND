import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {  signInuserAsync } from './Service/Action/userAction'

function SignIn() {
const dispatch = useDispatch()
const naviget = useNavigate()
const {user} = useSelector(state=>state.userRedux)
    const [inputForm,setinputForm] = useState({
        email:"",
        password:""
    })

    const handalchang = (e)=>{
        const {name,value} = e.target
        setinputForm({
            ...inputForm,
            [name]:value
        })
    }

    const handalsubmit = (e)=>{
e.preventDefault()
         dispatch(signInuserAsync(inputForm))
    }

    useEffect(()=>{
if(user){
  setinputForm({
        email:"",
        password:""
    })
    naviget('/')
}
    },[user])
  return (
    <>
    <Container>
          <Form onSubmit={handalsubmit}>
            <Row className='justify-content-center'>
                <Col sm={6}>
                 <Row >
                   <Col md={12} className="mb-3">
                     <Form.Label>
                       Email <span className="text-danger">*</span>
                     </Form.Label>
                     <InputGroup>
                       <Form.Control type="email" name="email" value={inputForm.name} onChange={handalchang} placeholder='Enter Email' />
                     </InputGroup>
                   </Col>


                    <Col md={12} className="mb-3">
                     <Form.Label>
                       Password <span className="text-danger">*</span>
                     </Form.Label>
                     <InputGroup>
                       <Form.Control type="password" name="password" value={inputForm.name} onChange={handalchang} placeholder='Enter Password' />
                     </InputGroup>
                   </Col>
                 </Row>
   
                 
   
                
   
                 <div className="text-center">
                   <Button type="submit" className="btn border-0 submit-btn p-2">

                     SignIn
                   </Button>
                 </div>
                 <div>
                    <p>No Account at <Link to={'/signup'}>Singup</Link></p>
                 </div>
                 </Col>
            </Row>
               </Form>
    </Container>
    </>
  )
}

export default SignIn