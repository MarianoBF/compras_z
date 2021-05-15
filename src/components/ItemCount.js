import Button from "react-bootstrap/Button";
import {useState} from "react";

export default function ItemCount({stock, initialValue, handleAdd}) {
  const [quantity, setQuantity] = useState(initialValue);

  const handleMore = () => {
    if (quantity < stock) {
      setQuantity(quantity => quantity + 1);
    }
  };

  const handleLess = () => {
    if (quantity > 1) {
      setQuantity(quantity => quantity - 1);
    }
  };

  return (
    <>
        <Button color="info" onClick={handleMore}>
          {" "}
          +{" "}
        </Button>
         {` ${quantity} `}
        <Button color="info" onClick={handleLess}>
          {" "}
          -{" "}
        </Button>
        {" "}
      <Button onClick={(e)=>handleAdd(e, quantity)}>Agregar al Carrito</Button>
    </>
  );
}
