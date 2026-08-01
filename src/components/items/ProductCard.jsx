import { TAX_RATE, CURRENCY } from '../../constants/storeConfig';

export default function ProductCard({ name, category, price, inStock, stockCount }) {
  const calculateDiscount = (basePrice, percent) => {
    return basePrice - (basePrice * (percent / 100));
  };

  return (
    <div className="product-card">
      <h3>{name}</h3>

      {/* 1. Template Literal / Concatenation: Assembling string from multiple variables */}
      <p className="meta">{`${category} • Vendor Item`}</p>

      {/* 2. Numeric Expression: Math evaluated inside JSX (Price + Tax) */}
      <p className="price">
        Price with Tax: {CURRENCY}{price + (price * TAX_RATE)}
      </p>

      {/* 3. Inline Function Call: Function called directly inside JSX expression */}
      <p className="discount">
        Sale Price (10% off): {CURRENCY}{calculateDiscount(price, 10)}
      </p>

      {/* 4. Ternary Expression: Boolean condition displaying one of two texts */}
      <p className="status">
        Status: {inStock ? `Available (${stockCount} left)` : "Currently Unavailable"}
      </p>
    </div>
  );
}