import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useOrders } from "../../context/OrdersContext";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function OrdersDetails() {
  const { id_order } = useParams();
  const orders = useOrders();
  const [order, setOrder] = useState();

  useEffect(() => {
    setOrder(orders.getOrderById(id_order));
  }, [id_order, orders]);

  const styles = {
    Container: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2em",
    },
    Card: {
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      maxWidth: "400px",
      maxHeight: "800px",
    },
    CardBody: {
      margin: "auto",
    },
  };

  if (!order) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>No se encuentra la orden</h2>
      </div>
    );
  }

  return (
    <Container style={styles.Container}>
      <Card style={styles.Card}>
        <Card.Body style={styles.CardBody}>
          <Card.Title>{order.id}</Card.Title>
          <Card.Text>{order.details.buyer.name}</Card.Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Container>
  );
}
