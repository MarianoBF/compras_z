import {Cart} from "react-bootstrap-icons";
import {useCart} from "../../context/CartContext";

export default function CartWidget() {
  const cart = useCart();

  const NumberOfItems = cart.getTotalNumberOfItems();

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
      {NumberOfItems > 0 && (
        <>
          <Cart size={36} />
          <div style={styles.number}>{NumberOfItems}</div>
        </>
      )}
    </div>
  );
}
