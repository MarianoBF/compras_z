import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo192.png";
import CartWidget from "./CartWidget";
import {LinkContainer} from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar
      style={{padding: "10px"}}
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <LinkContainer to={"/"}>
          <Navbar.Brand className="justify-content-start" style={{width: "5%"}}>
            <img src={logo} roundedCircle alt="logo" className="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="justify-content-center" style={{width: "100%"}}>
          <LinkContainer to={"/category/1"}>
            <Nav.Link>Vehículos</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/category/2"}>
            <Nav.Link>Electrónica</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/category/3"}>
            <Nav.Link>Libros</Nav.Link>
          </LinkContainer>
        </Nav>

        <CartWidget className="justify-content-end" />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
