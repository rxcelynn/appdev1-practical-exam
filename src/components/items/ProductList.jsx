import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <div className="product-list">
      <ProductCard 
        name="Handmade Nori-Chix Rice Bowl" 
        category="Snacks" 
        price={120} 
        inStock={true} 
        stockCount={15} 
      />
      <ProductCard 
        name="Woven Pastel Tote Bag" 
        category="Crafts" 
        price={350} 
        inStock={true} 
        stockCount={4} 
      />
      <ProductCard 
        name="Eco-Friendly Bamboo Tumbler" 
        category="Merchandise" 
        price={250} 
        inStock={false} 
        stockCount={0} 
      />
    </div>
  );
}