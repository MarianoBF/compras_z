import Table from "react-bootstrap/Table";

export default function OrdersList({ orders }) {
  const orderTable = orders.map((order) => {
    return (
      <tr key={order.date.seconds + order.date.nanoseconds}>
        <td>{order.buyer.name}</td>
        <td>{new Date(order.date.seconds*1000).toISOString().slice(0,10)}</td>
        <td>$ {order.total}</td>
        <td>{order.items.map(item=><p>{item.title} {item.quantity}</p>)}</td>
      </tr>
    );
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
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
