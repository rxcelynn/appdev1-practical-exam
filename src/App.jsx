import MainHeader from './components/layout/Header';
import ProductList from './components/items/ProductList';
import Footer from './components/layout/Footer';
import Divider from './components/common/Divider';

export default function App() {
  return (
    <div className="app-container">
      <MainHeader />
      <Divider />
      
      <main className="main-content">
        <ProductList />
      </main>

      <Divider />
      <Footer />
    </div>
  );
}