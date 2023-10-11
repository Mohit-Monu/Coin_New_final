import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/logo.jpeg"
function Header() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Brand href="#">
              <img style={{width:"100px",marginRight:"20px"}} src={logo}/>
              Coin.new</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Coin.new
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className='text-light'>Home</Nav.Link>
                  <Nav.Link href="/about"className='text-light'>About Us</Nav.Link>
                  <Nav.Link href="/faq"className='text-light'>FAQ</Nav.Link>
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