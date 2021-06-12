import {useState, useEffect, useContext, createContext} from "react";
import {getFirestore} from "../firebase";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("products");
    console.log("request CC");
    itemCollection.get().then(data => {
      setAllProducts(data.docs.map(item => item.data()));
    });
  }, []);

  const addItem = (quantity, product_id) => {
    //TODO: Should only reject? Warn? Add to cartProducts duplicate product?
    if (cartProducts.filter(item => item.id === product_id).length === 0) {
      const retrieveProduct = allProducts.filter(
        item => item.id === product_id
      );
      console.log(retrieveProduct);
      setCartProducts([
        ...cartProducts,
        {
          id: product_id,
          quantity,
          name: retrieveProduct[0].name,
          price: retrieveProduct[0].price,
          image: retrieveProduct[0].image,
        },
      ]);
      console.log(cartProducts);
    }
  };

  const removeItem = product_id => {
    const filtered = cartProducts.filter(item => item.id !== product_id);
    setCartProducts(filtered);
  };

  const clear = () => {
    setCartProducts([]);
  };

  const isInCart = product_id => {
    return !(
      cartProducts.filter(item => +item.id === +product_id).length === 0
    );
  };

  const getTotalNumberOfItems = () => {
    const reducer = (prev, cur) => prev + cur.quantity;
    const totalItems = cartProducts.reduce(reducer, 0);
    return totalItems;
  };

  const getTotalPrice = () => {
    const reducer = (prev, cur) => prev + cur.quantity * cur.price;
    const totalPrice = cartProducts.reduce(reducer, 0);
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addItem,
        removeItem,
        clear,
        isInCart,
        getTotalNumberOfItems,
        getTotalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};
