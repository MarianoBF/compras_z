import {useState} from "react";
import ItemList from "./ItemList";

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
      alert("Sumar al carrito " + quantity + " unidades del " + item);
    } else {
      alert("No hay stock suficiente, solo queda(n) " + previousStock);
    }
  };

  return (
    <div>
      <h1 style={{textAlign: "center"}}>
        {greeting}, desde aquí podrás ver un listado{" "}
      </h1>
        <ItemList handleAdd={handleAdd}/>
    </div>
  );
}
