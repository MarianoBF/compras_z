import {Cart} from "react-bootstrap-icons";
import {useCart} from "../../context/CartContext";

export default function CartWidget() {
  const cart = useCart();

  const styles = {
    div: {
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    number: {
      fontSize: "2rem",
      margin: "0 10px",
    },
  };

  return (
    <div style={styles.div}>
      <Cart size={36} />
      {cart.getTotalNumberOfItems()>-1&&<div style={styles.number}>{cart.getTotalNumberOfItems()}</div>}
    </div>
  );
}
