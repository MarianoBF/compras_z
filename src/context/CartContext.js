import {useState, useContext, createContext} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addItem = (quantity, product_id) => {
    //TODO: Should only reject? Warn? Add to cartProducts duplicate product?
    if (cartProducts.filter(item => item.id === product_id).length === 0) {
      setCartProducts([...cartProducts, {id: product_id, quantity}]);
    }
    //placeholder LOG
    console.log(cartProducts, product_id, quantity);
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

  return (
    <CartContext.Provider
      value={{cartProducts, addItem, removeItem, clear, isInCart}}>
      {children}
    </CartContext.Provider>
  );
};
