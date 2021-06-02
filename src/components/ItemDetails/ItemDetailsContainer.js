import ItemDetails from "./ItemDetails";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {MOCKPRODUCTS} from "../../utils/mockProducts";
import Spinner from "react-bootstrap/Spinner";

export default function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const {id_product} = useParams();
  const [isLoading, setIsLoading] = useState(true);

  //MOCK REQUEST OF SPECIFIC PRODUCT
  useEffect(() => {
    let filteredProduct = MOCKPRODUCTS.filter(item => item.id === +id_product);
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filteredProduct[0]);
      }, 1000);
    });
    getProduct.then(data => {
      setProduct(data);
      setIsLoading(false);
    });
  }, [id_product]);

  if (isLoading) {
    return (
      <div style={{textAlign: "center"}}>
        <h2>Trayendo información del producto...</h2>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <>
      <h1 className="mainTitle">Detalles del producto</h1>
      <ItemDetails item={product} />
    </>
  );
}
