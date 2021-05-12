import ListGroup from 'react-bootstrap/ListGroup';

export default function ItemListContainer({greeting}) {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>
        {greeting}, desde aquí podrás ver un listado{" "}
      </h1>
      <ListGroup>
        <ListGroup.Item variant="info">Item 1</ListGroup.Item>
        <ListGroup.Item variant="info">Item 2</ListGroup.Item>
        <ListGroup.Item variant="info">Item 3</ListGroup.Item>
        <ListGroup.Item variant="info">Item 4</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
