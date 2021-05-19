import ListGroup from "react-bootstrap/ListGroup";
import Item from "./Item";

export default function ItemList({handleAdd, products}) {

  const product = products?.map(item => (
    <Item key={item.id}
      name={item.name}
      description={item.description}
      stock={item.stock}
      initialValue={item.initialValue}
      handleAdd={handleAdd}
    />
  ));

  return <ListGroup>{product}</ListGroup>;
}
