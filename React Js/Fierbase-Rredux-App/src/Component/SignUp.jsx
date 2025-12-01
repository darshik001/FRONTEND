import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUserAsync } from "./Service/Action/userAction";

function SignUp() {
    const dispatch = useDispatch()
    const {errorMSG,isCreated} = useSelector((state =>state.userRedux))
    const naviget = useNavigate()
  const [inputForm, setinputForm] = useState({
    name:"",
    email: "",
    password: "",
  });

  const handalchang = (e) => {
    const { name, value } = e.target;
    setinputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handalsubmit = (e) => {
        e.preventDefault()
    console.log("SUbmit");
dispatch(RegisterUserAsync(inputForm))
  };

  useEffect(()=>{
if(isCreated){
  setinputForm({
    name:"",
    email: "",
    password: "",
  })
  naviget('/signin')
}
  },[isCreated])
  return (
    <>
      <Container>
        {errorMSG ? <p>{errorMSG}</p>:""}
        <Form onSubmit={handalsubmit}>
          <Row className="justify-content-center">
            <Col sm={6}>
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Label>
                    Full Name <span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      name="name"
                      value={inputForm.name}
                      onChange={handalchang}
                      placeholder="Enter name"
                    />
                  </InputGroup>
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Label>
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="email"
                      name="email"
                      value={inputForm.email}
                      onChange={handalchang}
                      placeholder="Enter Email"
                    />
                  </InputGroup>
                </Col>

                <Col md={12} className="mb-3">
                  <Form.Label>
                    Password <span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="password"
                      name="password"
                      value={inputForm.password}
                      onChange={handalchang}
                      placeholder="Enter Password"
                    />
                  </InputGroup>
                </Col>
              </Row>

              <div className="text-center">
                <Button type="submit" className="btn border-0 submit-btn p-2">
                  SignIn
                </Button>
              </div>
              <div>
                <p>
                  No Account at <Link to={"/signin"}>SingIn</Link>
                </p>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default SignUp;
