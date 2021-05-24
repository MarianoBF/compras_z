import ItemDetails from "./ItemDetails";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {MOCKPRODUCTS} from "../../utils/mockProducts";

export default function ItemListContainer({item}) {
  const [product, setProduct] = useState([]);
  const {id_product} = useParams();

  //MOCK REQUEST FOR PRODUCT DETAILS
  useEffect(() => {
    const getProduct = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(MOCKPRODUCTS);
        }, 500);
      },
      [product]
    );
    //MOCK GET ALL PRODUCTS AND FILTER
    getProduct.then(data => {
      let filteredProduct = data.filter(item => item.id === +id_product);
      setProduct(filteredProduct[0]);
    });
  });

  return (
    <>
      <ItemDetails item={product} />
    </>
  );
}
