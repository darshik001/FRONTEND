import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { SingOutAsync } from "./Service/Action/userAction"

const Header= ()=> {
  const dispatch = useDispatch()
  const {user} = useSelector(state=>state.userRedux)
  const handalSignout = ()=>{
    console.log("first")
   dispatch(SingOutAsync())
  }
  return (
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Link to={'/'}>Navbar with text</Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {/* <Nav.Link as={Link}  to={'/AddProduct'}>Add-Product</Nav.Link>
         {user?<Nav.Link as={Link} to={'/'}>profile</Nav.Link>:<Nav.Link as={Link} to={'/signin'}>SignIN</Nav.Link>}  */}
         {!user?<Nav.Link as={Link} to={'/signin'}>SignIN</Nav.Link>:(
          <>
          <Nav.Link as={Link}  to={'/AddProduct'}>Add-Product</Nav.Link>
          <Button variant="danger" onClick={handalSignout} >LOGOUT</Button>
          </>
         )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header