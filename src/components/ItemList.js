import ListGroup from "react-bootstrap/ListGroup";
import Item from "./Item";

export default function ItemList({handleAdd, products}) {

console.log("products", products)

  const product = products?.map(item => (
    <Item
      name={item.name}
      description={item.description}
      stock={item.stock}
      initialValue={item.initialValue}
      handleAdd={handleAdd}
    />
  ));

// const product = "daskjmas"

  return <ListGroup>{product}</ListGroup>;
}
