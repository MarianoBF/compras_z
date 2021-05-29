import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useHistory} from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetails({item, handleAdd}) {
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
          />
          <Card.Text><Button variant="secondary" onClick={() => history.goBack()}>
            Volver
          </Button></Card.Text>
        </Card.Body>
        <Card.Footer>{stock} unidades disponibles</Card.Footer>
      </Card>
    </Container>
  );
}
