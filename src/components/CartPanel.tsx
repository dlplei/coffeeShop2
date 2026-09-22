import { CartItem } from '../types';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export default function CartPanel({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartPanelProps) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-stone-800">🛒 购物车</h2>
            <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-stone-400">
                <span className="text-5xl mb-4">🛒</span>
                <p className="text-lg">购物车是空的</p>
                <p className="text-sm mt-2">去挑选一些好咖啡吧！</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4 bg-stone-50 rounded-xl p-4">
                    <div className="w-14 h-14 bg-amber-50 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      {item.product.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-stone-800 text-sm truncate">{item.product.name}</h4>
                      <p className="text-amber-600 font-bold">¥{item.product.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-sm font-bold transition-colors"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-sm font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1 text-stone-400 hover:text-red-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-stone-600">合计</span>
                <span className="text-2xl font-bold text-amber-600">¥{totalPrice}</span>
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-full font-bold text-lg transition-colors">
                去结算
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
