export default function ItemListContainer({name}) {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>
        Hola {name}, desde aquí podrás ver los productos agreegados a tu compra{" "}
      </h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
}
