import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function BuyForm({onSubmit}) {
  const styles = {
    BuyButton: {
      fontSize: "1.3rem",
    }
  }
  return (
    <Container style={{maxWidth: "800px"}}>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre y Apellido" />
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Número de Teléfono (con código de área)"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            Te enviaremos la confirmación de la compra e información de
            seguimiento a esta dirección.
          </Form.Text>
        </Form.Group>

        <Button style={styles.BuyButton} variant="primary" type="submit">
          Confirmar Compra
        </Button>
      </Form>
    </Container>
  );
}
