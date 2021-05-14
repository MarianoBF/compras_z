import Button from 'react-bootstrap/Button';
import {useState} from "react"

export default function ItemCount() {

const [quantity, setQuantity] = useState();

    return(
        <div>
        <Button>+</Button>
        {quantity}
        <Button>-</Button>
        </div>
    )
}