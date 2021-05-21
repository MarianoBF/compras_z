import {ItemDetails} from "./ItemDetails";
import {useEffect, useState} from "react";
import {MOCKPRODUCTS} from "../../utils/mockProducts";

export default function ItemListContainer({item}) {
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

  return (
    <>
      <ItemDetails item={products[0]} />
    </>
  );
}
