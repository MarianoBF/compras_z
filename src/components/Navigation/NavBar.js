import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo192.png";
import CartWidget from "./CartWidget";
import {LinkContainer} from "react-router-bootstrap";
import {MOCKCATEGORIES} from "../../utils/mockCategories";
import {useState, useEffect} from "react";

function NavBar() {
  const [categories, setCategories] = useState([]);

  //MOCK REQUEST FOR CATEGORY LIST
  useEffect(() => {
    const getCategories = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MOCKCATEGORIES);
      }, 500);
    }, []);
    getCategories.then(data => setCategories(data));
  });

  const categoryList = categories.map(item => (
    <LinkContainer to={"/category/"+item.id} key={item.id}>
      <Nav.Link>{item.name}</Nav.Link>
    </LinkContainer>
  ));

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
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="justify-content-center" style={{width: "100%"}}>
          {categoryList}
        </Nav>

        <CartWidget className="justify-content-end" />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
