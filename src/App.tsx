import { useState } from 'react';
import { Product, CartItem } from './types';
import { products } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import CartPanel from './components/CartPanel';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`已添加 ${product.name} 到购物车`);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            {/* Featured Products */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-stone-800 mb-3">精选推荐</h2>
                <p className="text-stone-500">来自世界各地的精品咖啡豆，每一款都值得品尝</p>
              </div>
              <ProductGrid
                products={products.slice(0, 4)}
                onAddToCart={handleAddToCart}
                onViewDetail={handleViewDetail}
              />
              <div className="text-center mt-10">
                <button
                  onClick={() => handleNavigate('products')}
                  className="border-2 border-stone-300 hover:border-amber-500 text-stone-700 hover:text-amber-600 px-8 py-3 rounded-full font-medium transition-all duration-200"
                >
                  查看全部咖啡 →
                </button>
              </div>
            </section>

            {/* Features */}
            <section className="bg-amber-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 text-2xl">
                      🌱
                    </div>
                    <h3 className="font-bold text-stone-800 mb-2">产地直采</h3>
                    <p className="text-stone-500 text-sm">与全球20+产区直接合作，品质有保障</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 text-2xl">
                      🔥
                    </div>
                    <h3 className="font-bold text-stone-800 mb-2">新鲜烘焙</h3>
                    <p className="text-stone-500 text-sm">下单后新鲜烘焙，48小时内发出</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4 text-2xl">
                      🎁
                    </div>
                    <h3 className="font-bold text-stone-800 mb-2">精美包装</h3>
                    <p className="text-stone-500 text-sm">专业咖啡包装，送礼自用两相宜</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );

      case 'products':
        return (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-stone-800 mb-3">全部咖啡</h1>
              <p className="text-stone-500">探索我们精心挑选的精品咖啡豆系列</p>
            </div>
            <ProductGrid
              products={products}
              onAddToCart={handleAddToCart}
              onViewDetail={handleViewDetail}
            />
          </section>
        );

      case 'detail':
        return selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBack={() => handleNavigate('products')}
          />
        ) : null;

      case 'about':
        return <About />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">{renderPage()}</main>

      <Footer />

      <CartPanel
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-stone-800 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-bounce">
          <span className="text-sm font-medium">✓ {toast}</span>
        </div>
      )}
    </div>
  );
}
