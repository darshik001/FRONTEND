import { Navbar,Container,Nav, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router';

 const Header=()=> {


let navigate = useNavigate()
  const handalNavigate = ()=>{
   navigate('/')
  }
  
  return (
    <>
      <section className='header  position-fixed top-0 w-100 z-1'>
          <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact/ send params">Contact</Nav.Link>   {/*send params contackt page as a name*/}
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
              <Button onClick={handalNavigate}>Navigate Using Button</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </section>
    </>
  )
}

export default Header;