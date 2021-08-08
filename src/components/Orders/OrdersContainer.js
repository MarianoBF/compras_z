import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import useMounted from "../../hooks/useMounted";
import { useOrders } from "../../context/OrdersContext";

export default function ItemListContainer({ email }) {
  const orders = useOrders();
  const [orderList, setOrderList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useMounted();

  useEffect(() => {
    const retrievedOrders = orders.getUserOrders(email);
    if (retrievedOrders.length === 0 && isMounted) {
        console.log("retrieved", retrievedOrders)
      setIsLoading(false);
      setOrderList(orders);
    }
    //eslint-disable-next-line
  }, [email]);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Trayendo información de las órdenes...</h2>
        <Spinner animation="border" />
      </div>
    );
  }

  console.log("orderlist", orderList)

  return (
    <>
      <h1 className="mainTitle">Listado de órdenes</h1>
      {orderList.map((order) => <p>{order?.buyer?.name}</p>)}
    </>
  );
}
