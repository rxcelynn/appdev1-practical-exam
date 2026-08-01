import Header from './components/layout/Header';
import ProductList from './components/items/ProductList';
import Footer from './components/layout/Footer';
import Divider from './components/common/Divider';

function App() {

  return (
  <div className="app-container">
      <Header />
      <Divider />
      
      <main className="main-content">
        <ProductList />
      </main>

      <Divider />
      <Footer />
    </div>
  )
}

export default App
