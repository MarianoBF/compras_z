import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom"

export default function ItemList({
  handleAdd,
  item,
  name,
  description,
  stock,
  initialValue,
  handleShowDetails,
}) {
  return (
    <ListGroup.Item variant="info" name={name}>
      {" "}
      {name} {" - "} {description} {" - "}
      <ItemCount
        stock={stock}
        initialValue={initialValue}
        handleAdd={handleAdd}
      />{" "}
      <p style={{display: "inline"}}>Stock disponible: {stock}</p> {" ---  "}
      <Link to={"/item/"+item.id}>
      <Button
        type="primary"
        style={{display: "inline"}}>
        Ver detalle del producto
      </Button>
      </Link>
    </ListGroup.Item>
  );
}
