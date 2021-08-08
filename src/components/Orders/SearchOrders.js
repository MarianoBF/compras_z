import { useState } from "react";
import { useOrders } from "../../context/OrdersContext";
import { Link } from "react-router-dom";

export default function SearchOrders() {
  const orders = useOrders();
  const [searchOrder, setSearchOrder] = useState();
  const [order, setOrder] = useState();

  const handleInput = (e) => {
    setSearchOrder(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchOrder, orders.getOrderById(searchOrder));
    setOrder(orders.getOrderById(searchOrder));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" onChange={handleInput} />
        <input type="submit" value="Buscar" />
      </form>
      {order && (
        <Link to={"/orders/" + order.id}>
          Se encontró la orden {order.id} del día{" "}
          {new Date(order.details.date.seconds * 1000)
            .toISOString()
            .slice(0, 10)}
          , clickeá para ver los detalles
        </Link>
      )}
    </div>
  );
}
