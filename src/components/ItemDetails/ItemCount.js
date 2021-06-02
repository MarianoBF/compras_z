import Button from "react-bootstrap/Button";
import {useState} from "react";

export default function ItemCount({
  stock,
  name,
  initialValue,
  handleAdd,
  showBuy,
}) {
  const [quantity, setQuantity] = useState(initialValue || 1);

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
      {!showBuy && (
        <>
          <Button color="info" onClick={handleMore}>
            {" "}
            +{" "}
          </Button>
          {` ${quantity} `}
          <Button color="info" onClick={handleLess}>
            {" "}
            -{" "}
          </Button>{" "}
          <Button
            className="spacedButton"
            onClick={() => handleAdd(quantity, stock, name)}>
            Agregar al Carrito
          </Button>
        </>
      )}
    </>
  );
}
