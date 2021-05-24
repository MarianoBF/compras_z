import ItemDetails from "./ItemDetails";
import {useEffect, useState} from "react";

export default function ItemListContainer({item, handleCloseDetails}) {
  const [product, setProduct] = useState([]);

  //MOCK REQUEST FOR PRODUCT DETAILS
  useEffect(() => {
    const getProduct = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(item);
        }, 2000);
      },
      [product]
    );
    getProduct.then(data => setProduct(data));
  });

  return (
    <>
      <ItemDetails item={product} handleCloseDetails={handleCloseDetails} />
    </>
  );
}
