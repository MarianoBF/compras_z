import ItemDetails from "./ItemDetails";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import {useCart} from "../../context/CartContext";
import {getFirestore} from "../../firebase";

export default function ItemListContainer() {
  const cart = useCart();
  const [product, setProduct] = useState();
  const {id_product} = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemToGet = db.collection("products").doc(String(id_product));
    console.log("FS request IDC");
    itemToGet.get().then(item => {
      //TODO: Add error handling
      setProduct({...item.data()});
      setIsLoading(false);
    });
  }, [id_product]);

  const addToCart = (quantity, id) => {
    cart.addItem(quantity, id);
    console.log(quantity, id)
  };

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
      <ItemDetails item={product} addToCart={addToCart} />
    </>
  );
}
