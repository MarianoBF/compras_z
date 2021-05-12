import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../logo192.png";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Brand
          href="#home"
          className="justify-content-start"
          style={{width: "5%"}}>
          <img src={logo} roundedCircle alt="logo" className="logo" />
          COMPRAS RR
        </Navbar.Brand>

        <Nav className="justify-content-center" style={{width: "100%"}}>
          <Nav.Link href="#vehículos">Vehículos</Nav.Link>
          <Nav.Link eventKey={2} href="#electrónica">
            Electrónica
          </Nav.Link>
          <Nav.Link eventKey={2} href="#libros">
            Libros
          </Nav.Link>
          <Nav.Link eventKey={2} href="#ofertas">
            Ofertas
          </Nav.Link>
          </Nav>

          <CartWidget className="justify-content-end" />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
