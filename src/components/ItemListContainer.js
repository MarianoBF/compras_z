import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import {MOCKPRODUCTS} from "../utils/mockProducts";

export default function ItemListContainer({greeting}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(MOCKPRODUCTS);
        }, 3000);
      },
      [products]
    );
    getProducts.then(data => setProducts(data));
  });

  const handleAdd = (e, quantity) => {
    const itemName = e.target.parentNode.getAttribute("name");
    const product = products.filter(item => item.name === itemName);
    const previousStock = product[0].stock;
    if (previousStock >= quantity) {
      const newProducts = [...products]
      const position = products.findIndex(item=>item.name === itemName)
      newProducts[position].stock = previousStock - quantity
      setProducts(newProducts);
      alert("Sumar al carrito " + quantity + " unidades del " + itemName);
    } else {
      alert("No hay stock suficiente, solo queda(n) " + previousStock);
    }
  };

  return (
    <div>
      <h1 style={{textAlign: "center"}}>
        {greeting}, desde aquí podrás ver un listado{" "}
      </h1>
      <ItemList handleAdd={handleAdd} products={products} />
    </div>
  );
}
