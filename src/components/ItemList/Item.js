import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom";

export default function ItemList({
  item,
  name,
  description,
  stock,
}) {
  return (
    <Card border="dark" className="card" bg="light">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Text>
          {description}
          </Card.Text>
          <Link to={"/item/" + item.id}>
            <Button className="spacedButton">
              Ver detalle del producto
            </Button>
          </Link>
      </Card.Body>
      <Card.Footer>
        <p style={{display: "inline"}}>Stock disponible: {stock}</p>
      </Card.Footer>
    </Card>
  );
}
