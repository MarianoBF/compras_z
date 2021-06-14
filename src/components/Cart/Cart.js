import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

export default function Cart({products, clear, remove, total}) {
  const styles = {
    Image: {
      maxHeight: "50px",
      width: "70px",
      objectFit: "contain",
      margin: "2px auto",
    },
    Table: {
      textAlign: "center",
      verticalAlign: "middle",
    },
    Total: {
      background: "lightblue",
      fontSize: "1.3rem",
      fontWeigth: "bold",
    },
    CancelButton: {
      fontSize: "0.8rem",
    },
  };

  const productsInCart = products.map(item => {
    return (
      <tr key={item.id}>
        <td>
          <Image style={styles.Image} src={item.image} rounded />
        </td>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.price*item.quantity}</td>
        <td>
          <Button style={styles.CancelButton} onClick={() => remove(item.id)}>Borrar</Button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Productos en el carrito</h2>

      <Table striped bordered hover style={styles.Table}>
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Precio total</th>
            <th>Borrar producto</th>
          </tr>
        </thead>
        <tbody>{productsInCart}</tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td style={styles.Total}>${total()}</td>
            <td>
              <Button style={styles.CancelButton} onClick={clear}>Vaciar Carrito</Button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
