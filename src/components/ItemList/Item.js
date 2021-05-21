import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "./ItemCount";

export default function ItemList({
  handleAdd,
  name,
  description,
  stock,
  initialValue,
}) {

  //Placeholder to replace with item details
  const handleDetailsView = (name) => {
    console.log(name)
  }

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
      <p onClick={()=>handleDetailsView(name)} style={{display: "inline"}}>Ver detalle del producto</p>
    </ListGroup.Item>
  );
}
