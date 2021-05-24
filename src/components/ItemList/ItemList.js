import ListGroup from "react-bootstrap/ListGroup";
import Item from "./Item";

export default function ItemList({handleAdd, handleShowDetails, products}) {
  const product = products?.map(item => (
    <Item
      key={item.id}
      item={item}
      name={item.name}
      description={item.description}
      stock={item.stock}
      initialValue={item.initialValue}
      handleAdd={handleAdd}
      handleShowDetails={handleShowDetails}
    />
  ));

  return <ListGroup>{product}</ListGroup>;
}
