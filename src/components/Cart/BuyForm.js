import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function BuyForm({onSubmit}) {
  const styles = {
    BuyButton: {
      fontSize: "1.3rem",
      margin: "20px",
    }
  }
  return (
    <Container style={{maxWidth: "800px"}}>
    <h2>Datos del comprador</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="text" placeholder="Juan Gómez" required minLength="4" maxLength="80"/>
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Teléfono (optativo)</Form.Label>
          <Form.Control
            type="text"
            placeholder="11-4444-4444"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="juan@gomez.com" minLength="8" maxLength="80" required/>
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
