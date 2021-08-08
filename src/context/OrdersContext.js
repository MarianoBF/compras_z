import {useState, useEffect, useContext, createContext} from "react";
import {getFirestore} from "../firebase";

const OrdersContext = createContext();

export const useOrders = () => useContext(OrdersContext);

export const OrdersProvider = ({children}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("orders");
    itemCollection
      .get()
      .then(data => {
        setOrders(data.docs.map(item => item.data()));
      console.log("orders", orders)

      })
      .catch(error => console.log(error));
  }, []);

  const getUserOrders = (userEmail) => {
      console.log(orders)
    return orders.filter(item=>item.email === userEmail);
  };

  return (
    <OrdersContext.Provider
      value={{
        getUserOrders,
      }}>
      {children}
    </OrdersContext.Provider>
  );
};
