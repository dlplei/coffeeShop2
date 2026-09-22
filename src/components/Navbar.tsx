import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ cartItems, onCartClick, currentPage, onNavigate }: NavbarProps) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-stone-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <span className="text-2xl mr-2">☕</span>
            <span className="text-xl font-bold tracking-wide">醇香咖啡</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors hover:text-amber-400 ${currentPage === 'home' ? 'text-amber-400' : ''}`}
            >
              首页
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`transition-colors hover:text-amber-400 ${currentPage === 'products' ? 'text-amber-400' : ''}`}
            >
              全部咖啡
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`transition-colors hover:text-amber-400 ${currentPage === 'about' ? 'text-amber-400' : ''}`}
            >
              关于我们
            </button>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-stone-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-stone-700 px-4 py-2 flex justify-around">
        <button onClick={() => onNavigate('home')} className={`text-sm py-1 ${currentPage === 'home' ? 'text-amber-400' : ''}`}>首页</button>
        <button onClick={() => onNavigate('products')} className={`text-sm py-1 ${currentPage === 'products' ? 'text-amber-400' : ''}`}>全部咖啡</button>
        <button onClick={() => onNavigate('about')} className={`text-sm py-1 ${currentPage === 'about' ? 'text-amber-400' : ''}`}>关于</button>
      </div>
    </nav>
  );
}
