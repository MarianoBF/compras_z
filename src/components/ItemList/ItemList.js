import CardDeck from "react-bootstrap/CardDeck";
import Item from "./Item";

export default function ItemList({products}) {
  const productList = products?.map(item => (
    <Item
      key={item.id}
      item={item}
      name={item.name}
      description={item.description}
      stock={item.stock}
      initialValue={item.initialValue}
    />
  ));

  return <CardDeck className="cardDeck">{productList}</CardDeck>;
}
