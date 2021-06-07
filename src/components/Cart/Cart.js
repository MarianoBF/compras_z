import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default function Cart({products, clear, remove}) {
  const productsInCart = products.map(item => {
    return (
      <tr key={item.id}>
        <td>{`ID PRODUCTO: ${item.id}`}</td>
        <td>{`CANTIDAD: ${item.quantity}`}</td>
        <td>
          <Button onClick={() => remove(item.id)}>Borrar Producto</Button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Productos en el carrito</h2>
      <p> Listado provisorio de productos en el carrito</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>

      {productsInCart}
      <hr />
      <Button onClick={clear}>Vaciar Carrito</Button>
    </div>
  );
}
