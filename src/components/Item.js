import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "./ItemCount";

export default function ItemList({
  handleAdd,
  name,
  description,
  stock,
  initialValue,
}) {
  return (
    //TODO: ADD ITEM DETAILS PAGE
    <ListGroup.Item variant="info" name={name}>
      {" "}
      {name} {" - "} {description} {" - "}
      <ItemCount
        stock={stock}
        initialValue={initialValue}
        handleAdd={handleAdd}
      />{" "}
      <p style={{display: "inline"}}>Stock disponible: {stock}</p>
    </ListGroup.Item>
  );
}
