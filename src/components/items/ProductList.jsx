import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <div className="product-list">
      <ProductCard name="Handmade Nori-Chix Rice Bowl" category="Snacks" price={120} />
      <ProductCard name="Woven Pastel Tote Bag" category="Crafts" price={350} />
      <ProductCard name="Eco-Friendly Bamboo Tumbler" category="Merchandise" price={250} />
    </div>
  );
}