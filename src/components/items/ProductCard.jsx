export default function ProductCard({ name, category, price }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ₱{price}</p>
    </div>
  );
}