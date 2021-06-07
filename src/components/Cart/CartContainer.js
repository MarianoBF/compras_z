import {useCart} from "../../context/CartContext";
import Button from "react-bootstrap/Button";

export default function CartContainer() {
  const cart = useCart();

  const productsInCart = cart.cartProducts.map(item => {
    return (
      <div style={{display: "flex"}}>
        <p>{`ID PRODUCTO: ${item.id}, CANTIDAD: ${item.quantity} - `}</p>
        <Button onClick={() => cart.removeItem(item.id)}>
          Borrar Producto
        </Button>
      </div>
    );
  });
  return (
    <div>
      <h2>Productos en el carrito</h2>
      <p> Listado provisorio de productos en el carrito</p>

      {productsInCart}
      <hr />
      <Button onClick={cart.clear}>Vaciar Carrito</Button>
    </div>
  );
}
