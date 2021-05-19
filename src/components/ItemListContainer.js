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
        }, 2000);
        console.log(products);
      },
      [products]
    );
    getProducts.then(data=>setProducts(data))
    ;
  });

  const handleAdd = (e, quantity) => {
    console.log(quantity);
    //   const item = e.target.parentNode.getAttribute("name");
    //   const previousStock = stock[item];
    //   if (previousStock >= quantity) {
    //     setStock({...stock, [item]: previousStock - quantity});
    //     alert("Sumar al carrito " + quantity + " unidades del " + item);
    //   } else {
    //     alert("No hay stock suficiente, solo queda(n) " + previousStock);
    //   }
    // };
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
