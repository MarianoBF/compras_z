import Table from "react-bootstrap/Table";

export default function OrdersList({ orders }) {
  const orderTable = orders.map((order) => {
    return (
      <tr key={order.details.date.seconds + order.details.date.nanoseconds}>
        <td>{order.id}</td>
        <td>{order.details.buyer.name}</td>
        <td>{new Date(order.details.date.seconds*1000).toISOString().slice(0,10)}</td>
        <td>$ {order.details.total}</td>
        <td>{order.details.items.map(item=><p>{item.title} {item.quantity}</p>)}</td>
      </tr>
    );
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Monto Total</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>{orderTable}</tbody>
    </Table>
  );
}
