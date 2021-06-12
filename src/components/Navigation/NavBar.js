import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo192.png";
import CartWidget from "./CartWidget";
import {LinkContainer} from "react-router-bootstrap";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import {getFirestore} from "../../firebase";

function NavBar() {
  const styles = {
    categories: {
      padding: "15px",
      fontWeight: "bold",
    },
    HomeCategory: {
      padding: "15px",
      fontWeight: "bold",
      backgroundColor: "white",
      color: "darkolivegreen",
      borderRadius: "50px",
      marginRight: "10%",
    },
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("categories");
    console.log("request NB");
    itemCollection.get().then((data)=>{
      setCategories(data.docs.map(item=> item.data()));
  });}, [])

  const categoryList = categories.map(item => (
    <LinkContainer
      style={styles.categories}
      to={"/category/" + item.id}
      key={item.id}>
      <Nav.Link>{item.name}</Nav.Link>
    </LinkContainer>
  ));

  return (
    <Navbar
      style={{padding: "20px"}}
      collapseOnSelect
      expand="lg"
      variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <LinkContainer to={"/"}>
          <Navbar.Brand className="justify-content-start" style={{width: "5%"}}>
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="justify-content-center" style={{width: "100%"}}>
          <LinkContainer style={styles.HomeCategory} to={"/"}>
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
          {categoryList}
        </Nav>
        <Link style={{textDecoration: "none"}} to={"/cart"}>
          <CartWidget className="justify-content-end" />
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
