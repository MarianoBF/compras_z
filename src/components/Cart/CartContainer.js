import { useCart } from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import BuyForm from "./BuyForm";
import { getFirestore } from "../../firebase";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

export default function CartContainer({ user }) {
  const cart = useCart();
  const history = useHistory();

  const [orderID, setOrderID] = useState("");

  const [finishedOrder, setFinishedOrder] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [checkingStock, setCheckingStock] = useState(false);
  const [stockError, setStockError] = useState(false);
  const [stockErrorMessage, setStockErrorMessage] = useState([]);


  if (cart.cartProducts?.length === 0) {
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
    setStockError(false)
    setCheckingStock(true);
    setTimeout(() => {
    const stock = cart.checkStock();
    if (stock === "OK") {
      setShowForm(true);
      setCheckingStock(false);
    } else {
      setCheckingStock(false);
      setStockError(true);
      setStockErrorMessage(stock);
    }
  }, 2000);
  };

  const handleReturn = () => {
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    cart.clear();
    history.push("/");
  };

  const handleSubmit = (values) => {
    const orderedProducts = cart.cartProducts.map((item) => ({
      id: item.id,
      title: item.name,
      price: item.price,
      quantity: item.quantity,
      stock: item.stock,
      option: item.option,
    }));
    const order = {
      buyer: {
        name: values.name,
        phone: values.phone,
        email: values.email,
        address: values.address,
        comments: values.comments,
      },
      items: [...orderedProducts],
      date: new Date(),
      total: cart.getTotalPrice(),
    };
    getFirestore()
      .collection("orders")
      .add(order)
      .then((res) => {
        setOrderID(res.id);
        order.items.forEach((item) =>
          getFirestore()
            .collection("products")
            .doc(String(item.id))
            .update({ stock: item.stock - item.quantity })
        );
        setFinishedOrder(true);
        setShowForm(false);
      })
      .catch((error) => console.log(error));
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
          Se ha realizado tu pedido exitosamente {user.name}. El número de
          registro del pedido es: {orderID}
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
          {!finishedOrder && user.name && (
            <>
              <Button onClick={handleShowForm} className="closeBtn">
                Confirmar compra
              </Button>
              <Alert show={checkingStock} variant="success">
                <p>Chequeando stock...</p>
              </Alert>
              <Alert show={stockError} variant="danger">
                <p>Se encontró un problema con el stock:</p>
                {stockErrorMessage.map(item =>  { return item.type="tooMuch" ? <p>El artículo {item.name} tiene {item.stock} cantidades disponibles</p> : <p> Debe pedir al menos una unidad de {item.name} </p> })}
                <p>Esto puede deberse a que se modificó el stock disponible mientras realizabas la compra, en caso de que persista este mensaje por favor contactanos</p>
                <p>Por favor, ajustá tu pedido y volvé a presionar Confirmar compra </p>
              </Alert>

              <p>
                En el siguiente paso podrás detallar los datos para el envío.
                Realizarás la compra a nombre de {user.name}
              </p>
            </>
          )}
          {!finishedOrder && !user.name && (
            <div className="loginRequired">
              <p>
                Necesitás loguearte desde la barra superior para completar una
                compra.
              </p>
            </div>
          )}
        </>
      )}

      {!finishedOrder && showForm && (
        <BuyForm
          handleSubmitForm={handleSubmit}
          handleCancel={handleCancel}
          handleReturn={handleReturn}
          user={user}
        />
      )}
    </div>
  );
}
