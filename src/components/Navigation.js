import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../logo.svg";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-end">
      <Navbar.Brand href="#home">
      <img src={logo} roundedCircle alt="logo" />
        RICARDA COMPRAS 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link eventKey={2} href="#marcas">
            Marcas
          </Nav.Link>
          <Nav.Link eventKey={2} href="#ofertas">
            Ofertas
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
