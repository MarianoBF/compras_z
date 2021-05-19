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
    <ListGroup.Item variant="info">
      {" "}
      {name} {" - "} {description} {" - "} 
      <ItemCount
        stock={stock}
        initialValue={initialValue}
        handleAdd={handleAdd}
      />
    </ListGroup.Item>
  );
}
