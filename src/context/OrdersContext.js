import { useState, useEffect, useContext, createContext } from "react";
import { getFirestore } from "../firebase";

const OrdersContext = createContext();

export const useOrders = () => useContext(OrdersContext);

export const OrdersProvider = ({ children }) => {
  const [placedOrders, setPlacedOrders] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("orders");
    itemCollection
      .get()
      .then((data) => {
        setPlacedOrders(data.docs.map((item) => item.data()));
      })
      .catch((error) => console.log(error));
  }, []);

  const getUserOrders = (userEmail) => {
    console.log("placed", placedOrders);
    console.log(userEmail)
    return placedOrders.filter(item=>item.buyer.email === userEmail);
  };

  return (
    <OrdersContext.Provider
      value={{
        getUserOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
