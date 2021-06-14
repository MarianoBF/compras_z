import {useCart} from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import {useHistory} from "react-router-dom";
import BuyForm from "./BuyForm";

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

  const onSubmit = e => {
    e.preventDefault();
    const orderedProducts = cart.cartProducts.map(item => ({
      id: item.id,
      title: item.name,
      price: item.price,
    }));
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: [...orderedProducts],
      total: cart.getTotalPrice(),
    };
    console.log("Order details:", order);
  };

  return (
    <div className="centered">
      <Cart
        products={cart.cartProducts}
        clear={cart.clear}
        remove={cart.removeItem}
        total={cart.getTotalPrice}
      />
      <hr />

      <BuyForm onSubmit={onSubmit} />
    </div>
  );
}
