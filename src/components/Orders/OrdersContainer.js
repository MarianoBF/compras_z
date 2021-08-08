import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import useMounted from "../../hooks/useMounted";
import { useOrders } from "../../context/OrdersContext";

export default function ItemListContainer({ email }) {
  console.log("email", email)
  const orders = useOrders();
  const [orderList, setOrderList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useMounted();
  const [noOrders, setNoOrders] = useState(false);

  useEffect(() => {
    const retrievedOrders = orders.getUserOrders(email);
    if (retrievedOrders.length > 0 && isMounted) {
      console.log("yesord")
      setNoOrders(false);
      setOrderList(retrievedOrders);
      setIsLoading(false);
    } else {
      console.log("noOrd")
      setIsLoading(false);
      setNoOrders(true);
    }
  }, [email, isMounted, orders]);

  const traer = () => {
    setIsLoading(false);
    setOrderList(orders.getUserOrders(email));
    console.log(orderList)
  }

  if (isLoading) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Trayendo información de las órdenes...</h2>
        <Spinner animation="border" />
      </div>
    );
  }

  if (noOrders) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Aún no hay pedidos para este usuario</h2>
      </div>
    );
  }

  return (
    <>
      <h1 className="mainTitle">Listado de órdenes</h1>
      <div>
      <p>dsada{orderList?.total}</p>
      {orderList.length>0?(orderList.map((item) => <div key={item.date.seconds+item.date.nanoseconds}><p>{item.total} {item.buyer.name}</p></div>)):""}
      </div>
      <button onClick={traer}>TRAER</button>
    </>
  );
}
