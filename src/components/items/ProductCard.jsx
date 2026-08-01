import { TAX_RATE, CURRENCY } from '../../constants/storeConfig';

export default function ProductCard({ name, category, price }) {
  const priceWithTax = price + (price * TAX_RATE);

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Base Price: {CURRENCY}{price}</p>
      <p>Price with Tax: {CURRENCY}{priceWithTax.toFixed(2)}</p>
    </div>
  );
}