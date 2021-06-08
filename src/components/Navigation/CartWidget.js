import { Cart } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import {useCart} from "../../context/CartContext";

export default function CartWidget() {

    const cart = useCart();

    return(
        <div style={{color:"white", display:"flex"}}>
        <Cart className="ml-4" size={36}/>  
        <Badge variant="secondary">{cart.getTotalNumberOfItems()}</Badge>
        </div>
    )
}