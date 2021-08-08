export default function OrdersList({orders}) {

  return(
    <div>
    {orders.map((item) => (
      <div key={item.date.seconds + item.date.nanoseconds}>
        <p>
          {item.total} {item.buyer.name}
        </p>
      </div>
    ))}
  </div>
  );
}
