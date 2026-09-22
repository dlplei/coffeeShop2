import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetail: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewDetail }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image Area */}
      <div
        className="h-48 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center cursor-pointer relative overflow-hidden"
        onClick={() => onViewDetail(product)}
      >
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{product.image}</span>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-stone-600">
          {product.roast}
        </div>
        <div className="absolute top-3 right-3 bg-amber-500/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white">
          {product.weight}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-stone-800 mb-1">{product.name}</h3>
        <p className="text-sm text-stone-500 mb-3">产地：{product.origin}</p>

        {/* Flavor Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.flavor.map((f) => (
            <span key={f} className="bg-amber-50 text-amber-700 text-xs px-2 py-0.5 rounded-full border border-amber-200">
              {f}
            </span>
          ))}
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-amber-600">¥{product.price}</span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-stone-800 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
          >
            加入购物车
          </button>
        </div>
      </div>
    </div>
  );
}
