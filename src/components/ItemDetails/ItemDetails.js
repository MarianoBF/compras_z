import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ItemDetails({name, description, image, price, stock}) {
  return (
    <>
      <Card style={{width: "50vw"}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {name} {"- $" + price}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{stock} unidades disponibles</Card.Text>
          {/* //TODO: handle buy  */}
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </>
  );
}
