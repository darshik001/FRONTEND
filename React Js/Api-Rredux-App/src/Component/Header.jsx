import { Container, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header= ()=> {
  return (
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Link to={'/'}>Navbar with text</Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to={'/AddProduct'}>Add-Product</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header