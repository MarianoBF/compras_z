import ItemDetails from "./ItemDetails";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import {useCart} from "../../context/CartContext";
import {getFirestore} from "../../firebase";
import useMounted from "../hooks/useMounted";
import {useHistory} from "react-router-dom";

export default function ItemListContainer() {
  const cart = useCart();
  const [product, setProduct] = useState({});
  const {id_product} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useMounted();
  const [outOfRange, setOutOfRange] = useState(false);
  const history = useHistory();

  const inCart = cart.isInCart(id_product);

  useEffect(() => {
    const db = getFirestore();
    const itemToGet = db.collection("products").doc(String(id_product));
    itemToGet
      .get()
      .then(item => {
        if (isMounted.current) {
          setProduct({...item.data()});
          setIsLoading(false);
          console.log(item.exists);
          if (!item.exists) {
            setOutOfRange(true);
            setTimeout(() => {
              setOutOfRange(false);
              history.push("/");
            }, 5000);
          }
        }
      })
      .catch(error => console.log(error));
  }, [id_product]);

  const addToCart = (quantity, id) => {
    cart.addItem(quantity, id);
  };

  if (isLoading) {
    return (
      <div style={{textAlign: "center"}}>
        <h2>Trayendo información del producto...</h2>
        <Spinner animation="border" />
      </div>
    );
  }

  if (outOfRange) {
    return (
      <div style={{textAlign: "center"}}>
        <h2>Producto inexistente</h2>
        <h2>Serás redirigido a la página principal</h2>
      </div>
    );
  }

  return (
    <>
      <h1 className="mainTitle">Detalles del producto</h1>
      <ItemDetails item={product} addToCart={addToCart} inCart={inCart} />
    </>
  );
}
