import {useCart} from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import BuyForm from "./BuyForm";
import {getFirestore} from "../../firebase";
import Alert from "react-bootstrap/Alert";
import {Link} from "react-router-dom";

export default function CartContainer({user}) {
  const cart = useCart();
  const history = useHistory();

  const [orderID, setOrderID] = useState("");

  const [finishedOrder, setFinishedOrder] = useState(false);
  const [showForm, setShowForm] = useState(false);

  if (cart.cartProducts.length === 0) {
    return (
      <div className="centered">
        <h1>Aún no hay productos en el carrito</h1>
        <Link to={"/"}>
          <Button>Volver y agregar productos</Button>
        </Link>
      </div>
    );
  }

  const handleCloseAlert = () => {
    setFinishedOrder(false);
    cart.clear();
    history.push("/");
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleReturn = () => {
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    cart.clear();
    history.push("/");
  };

  const handleSubmit = e => {
    e.preventDefault();
    const orderedProducts = cart.cartProducts.map(item => ({
      id: item.id,
      title: item.name,
      price: item.price,
      quantity: item.quantity,
      stock: item.stock,
    }));
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: [...orderedProducts],
      date: new Date(),
      total: cart.getTotalPrice(),
    };
    getFirestore()
      .collection("orders")
      .add(order)
      .then(res => {
        setOrderID(res.id);
        order.items.forEach(item =>
          getFirestore()
            .collection("products")
            .doc(String(item.id))
            .update({stock: item.stock - item.quantity})
        );
        setFinishedOrder(true);
        setShowForm(false);
      })
      .catch(error => console.log(error));
  };

  const cartMethods = {
    clear: cart.clear,
    remove: cart.removeItem,
    total: cart.getTotalPrice,
    increaseQuantity: cart.increaseQuantity,
    decreaseQuantity: cart.decreaseQuantity,
  };

  return (
    <div className="centered">
      <Alert show={finishedOrder} variant="success">
        <p>
          Se ha realizado tu pedido exitosamente {user.name}. El número de registro del
          pedido es: {orderID}
        </p>
        <p>
          Recibirás un correo electrónico confirmando la fecha de entrega e
          instrucciones para el pago.
        </p>
        <div>
          <Button onClick={handleCloseAlert} className="closeBtn">
            Cerrar aviso y volver al menú principal
          </Button>
        </div>
      </Alert>

      {!showForm && (
        <>
          {" "}
          <Cart
            products={cart.cartProducts}
            cartMethods={cartMethods}
            finished={finishedOrder}
          />
          <hr />
          {!finishedOrder && user.name ? (
            <>
              <Button onClick={handleShowForm} className="closeBtn">
                Confirmar compra
              </Button>
              <p>
                En el siguiente paso podrás detallar los datos para el envío.
                Realizarás la compra a nombre de {user.name}
              </p>
            </>
          ) : (
        <p>Necesitas loguearte desde la barra para completar una compra.</p>
      ) }
        </>
      ) }

      {!finishedOrder && showForm && (
        <BuyForm
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          handleReturn={handleReturn}
          user = {user}
        />
      )}
    </div>
  );
}
