import Button from 'react-bootstrap/Button';
import {useState} from "react"

export default function ItemCount() {

const [quantity, setQuantity] = useState(0);

const handleMore = () => {
    setQuantity(quantity=>quantity + 1)
}

const handleLess = () => {
    setQuantity(quantity=>quantity - 1)
}

    return(
        <div>
        <Button onClick={handleMore}>+</Button>
        {quantity}
        <Button onClick={handleLess}>-</Button>
        </div>
    )
}