import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "./ItemCount";
import {useState} from "react";

export default function ItemListContainer({greeting}) {
  const initialStocks = {
    item1: 10,
    item2: 5,
    item3: 8,
    item4: 7,
  };

  const [stock, setStock] = useState(initialStocks);

  const handleAdd = (e, quantity) => {
    const item = e.target.parentNode.getAttribute("name");
    const previousStock = stock[item];
    if (previousStock >= quantity) {
      setStock({...stock, [item]: previousStock - quantity});
      console.log("Sumar al carrito " + quantity + " unidades del " + item);
    } else {
      console.log("No hay stock suficiente, solo queda(n) " + previousStock);
    }
  };

  return (
    <div>
      <h1 style={{textAlign: "center"}}>
        {greeting}, desde aquí podrás ver un listado{" "}
      </h1>
      <ListGroup>
        <ListGroup.Item variant="info" name="item1">
          {" Item 1 "}
          <ItemCount
            stock={stock.item1}
            initialValue={1}
            handleAdd={handleAdd}
          />
        </ListGroup.Item>
        <ListGroup.Item variant="info" name="item2">
          {" Item 2 "}
          <ItemCount
            stock={stock.item2}
            initialValue={1}
            handleAdd={handleAdd}
          />
        </ListGroup.Item>
        <ListGroup.Item variant="info" name="item3">
          {" Item 3 "}
          <ItemCount
            stock={stock.item3}
            initialValue={1}
            handleAdd={handleAdd}
          />
        </ListGroup.Item>
        <ListGroup.Item variant="info" name="item4">
          {" Item 4 "}
          <ItemCount
            stock={stock.item4}
            initialValue={2}
            handleAdd={handleAdd}
          />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
