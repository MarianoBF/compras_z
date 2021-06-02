import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useHistory} from "react-router-dom";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function ItemDetails({item}) {
  const {name, description, image, price, stock} = item;

  const history = useHistory();

  const styles = {
    Container: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2em",
    },
    Card: {
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      maxWidth: "400px",
      maxHeight: "800px",
    },
    Image: {
      maxHeight: "350px",
      maxWidth: "350px",
      objectFit: "contain",
      margin: "25px auto",
    },
    CardBody: {
      margin: "auto",
    },
  };

  //TODO: reflect in cart & stock leveles
  const [showBuy, setShowBuy] = useState(false);
  const handleAdd = (quantity, name) => {
    alert("Sumar al carrito " + quantity + " unidades del producto " + name);
    const purchase = {"product": name, "quantity": quantity}
    //PLACEHOLDER log
    console.log(purchase)
    setShowBuy(true);
  };

  return (
    <Container style={styles.Container}>
      <Card style={styles.Card}>
        <Card.Img
          variant="top"
          src={image}
          style={styles.Image}
          alt="Imagen del producto"
        />
        <Card.Body style={styles.CardBody}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{"$" + price}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <ItemCount
            stock={stock}
            name={name}
            handleAdd={handleAdd}
            showBuy={showBuy}
          />
          {showBuy && (
            <Link to="/cart">
              <Button className="spacedButton" onClick={null}>
                Terminar mi compra (ir al carrito)
              </Button>
            </Link>
          )}
          <Card.Text>
            <Button variant="secondary" onClick={() => history.goBack()}>
              Volver
            </Button>
          </Card.Text>
        </Card.Body>
        {!showBuy && <Card.Footer>{stock} unidades disponibles</Card.Footer>}
      </Card>
    </Container>
  );
}
