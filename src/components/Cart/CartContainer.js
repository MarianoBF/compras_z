import {useCart} from "../../context/CartContext";
import Button from "react-bootstrap/Button";

export default function CartContainer() {

    const cart = useCart();

    const productsInCart = cart.cartProducts.map(item=>{return <p>ID PRODUCTO: {item.id}, CANTIDAD: {item.quantity}</p>})

    return(
        <div>
        <h1>Esto es un componente donde irá el pedido para finalizar la compra</h1>
        <h2>Productos en el carrito</h2>
        {productsInCart}
        Listado provisional de productos en el carrito
        <hr />  
        <Button onClick={cart.clear}>Vaciar Carrito</Button>
        </div>
    )
}