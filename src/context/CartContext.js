import {useState, useContext, createContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [sample, setSample] = useState(["1","2"])


    return (
        <CartContext.Provider value={sample}>
            {children}
        </CartContext.Provider>
    )
}