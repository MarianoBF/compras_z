import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function ItemDetails({item, handleCloseDetails}) {
  const {name, description, image, price, stock} = item;

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
      width: "300px",
      height: "500px",
    },
    Image: {
      height: "250px",
      maxWidth: "250px",
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
          <Card.Title>
            {name} {"- $" + price}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{stock} unidades disponibles</Card.Text>
          <Button variant="primary">Comprar</Button>{" "}
          <Button variant="secondary" onClick={handleCloseDetails}>
            Cerrar Detalle
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
