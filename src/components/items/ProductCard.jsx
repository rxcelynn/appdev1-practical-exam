import { TAX_RATE, CURRENCY } from '../../constants/storeConfig';
import '../../styles/ProductCard.css'; 

export default function ProductCard({ name, category, price, inStock, stockCount }) {
  const calculateDiscount = (basePrice, percent) => {
    return basePrice - (basePrice * (percent / 100));
  };

  return (
    <div className="product-card">
      <div className="card-header">
        <h3>{name}</h3>
        {/* Uses global class 'badge-text' from global.css without importing global.css here */}
        <span className="badge-text">Featured</span>
      </div>

      <p className="meta">{`${category} • Vendor Item`}</p>

      <p className="price">
        Price with Tax: {CURRENCY}{price + (price * TAX_RATE)}
      </p>

      <p className="discount">
        Sale Price (10% off): {CURRENCY}{calculateDiscount(price, 10)}
      </p>

      <p className="status">
        Status: {inStock ? `Available (${stockCount} left)` : "Currently Unavailable"}
      </p>
    </div>
  );
}