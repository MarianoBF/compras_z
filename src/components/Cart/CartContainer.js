import {useCart} from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import {useHistory} from "react-router-dom";

export default function CartContainer() {
  const cart = useCart();
  const history = useHistory();

  if (cart.cartProducts.length === 0) {
    return (
      <div className="centered">
        <h1>Aún no hay productos en el carrito</h1>
        <Button onClick={() => history.goBack()}>
          Volver y agregar productos
        </Button>
      </div>
    );
  }
  return (
    <div className="centered">
      <Cart
        products={cart.cartProducts}
        clear={cart.clear}
        remove={cart.removeItem}
        total={cart.getTotalPrice}
      />
    </div>
  );
}
