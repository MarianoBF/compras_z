import {useState, useContext, createContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (product_id, quantity) => {
        setCart([...cart, {id:product_id, quantity}])
        //placeholder LOG
        console.log(cart)
    }

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}