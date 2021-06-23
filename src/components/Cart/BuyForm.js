import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useState} from "react";

const styles = {
  BuyButton: {
    fontSize: "1.3rem",
    margin: "20px",
  },
  CancelButton: {
    fontSize: "0.8rem",
    margin: "10px",
  },
};

export default function BuyForm({
  handleSubmit,
  handleCancel,
  handleReturn,
  user,
}) {

  const [values, setValues] = useState({
    name: user.name,
    phone: "",
    email: user.email,
    address: "",
    comments: "",
  });

  const handleChange =  e => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };

  return (
    <Container style={{maxWidth: "800px"}}>
      <h2>Datos del comprador</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juan Gómez"
            minLength="4"
            maxLength="80"
            value={values.name}
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Teléfono (requerido)</Form.Label>
          <Form.Control
            type="text"
            placeholder="11-4444-4444"
            value={values.phone}
            onChange={handleChange}
            name="phone"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="juan@gomez.com"
            minLength="8"
            maxLength="80"
            value={values.email}
            readOnly
          />
          <Form.Text className="text-muted">
            Te enviaremos la información de la compra a esta dirección.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Dirección para la entrega. Indicar calle, número y localidad (requerido)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Av. Rivadavia 4532 6°E, CABA"
            minLength="8"
            value={values.address}
            onChange={handleChange}
            maxLength="200"
            required
            name="address"
          />
        </Form.Group>

        <Form.Group controlId="comments">
          <Form.Label>Observaciones (opcional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entregar envuelto para regalo."
            value={values.comments}
            onChange={handleChange}
            maxLength="200"
            name="comments"
            
          />
          <Form.Text className="text-muted">
            Indicá en este campo si tenés alguna observación para el pedido.
          </Form.Text>
        </Form.Group>

        <Button
          disabled={values.address.length < 12 || values.phone.length<8}
          style={styles.BuyButton}
          variant="primary"
          type="submit">
          Confirmar Compra
        </Button>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={handleReturn}
            style={styles.CancelButton}
            variant="secondary">
            Volver al listado de productos
          </Button>
          <Button
            onClick={handleCancel}
            style={styles.CancelButton}
            variant="secondary">
            Me arrepentí, cancelar compra
          </Button>
        </div>
      </Form>
    </Container>
  );
}
