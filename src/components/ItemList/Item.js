import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "./ItemCount";

export default function ItemList({
  handleAdd,
  item,
  name,
  description,
  stock,
  initialValue,
  handleShowDetails
}) {

  //Placeholder to replace with item details

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
      <Button type="primary" onClick={()=>handleShowDetails(item)} style={{display: "inline"}}>Ver detalle del producto</Button>
    </ListGroup.Item>
  );
}
