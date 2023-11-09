import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/logo.jpeg"
import Button from 'react-bootstrap/Button';
function Header() {

  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} style={{backgroundColor:"#F1EFEF"}} >
          <Container fluid>
            <Navbar.Brand href="#">
              <img style={{width:"170px",height:"50px",marginLeft:"40px"}} src={logo}/>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Coin.new
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1  align-items-center">
                  <Nav.Link href="/" style={{fontSize:"20px",color:"black",fontWeight:"400"}}>Home</Nav.Link>
                  <Nav.Link href="/about" style={{fontSize:"20px",color:"black",fontWeight:"400"}}>About Us</Nav.Link>
                  <Nav.Link href="/faq" style={{fontSize:"20px",color:"black",fontWeight:"400"}}>FAQ</Nav.Link>
                  <Nav.Link href="/contact" ><Button variant="outline-info " style={{fontSize:"20px",color:"black",fontWeight:"400"}} >Contact Us</Button></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;