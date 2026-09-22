import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

export default function ProductDetail({ product, onAddToCart, onBack }: ProductDetailProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={onBack}
        className="flex items-center text-stone-500 hover:text-stone-800 mb-8 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        返回
      </button>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Image */}
          <div className="md:w-1/2 bg-gradient-to-br from-amber-50 to-orange-100 p-12 flex items-center justify-center">
            <span className="text-[10rem]">{product.image}</span>
          </div>

          {/* Info */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="mb-2">
              <span className="bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1 rounded-full">
                {product.roast}
              </span>
              <span className="bg-stone-100 text-stone-600 text-xs font-medium px-3 py-1 rounded-full ml-2">
                {product.weight}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-stone-800 mt-4 mb-2">{product.name}</h1>
            <p className="text-stone-500 mb-6">产地：{product.origin}</p>

            <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

            {/* Flavor Profile */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-700 mb-3">风味描述</h3>
              <div className="flex flex-wrap gap-2">
                {product.flavor.map((f) => (
                  <span key={f} className="bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm border border-amber-200">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Roast Level */}
            <div className="mb-8">
              <h3 className="font-semibold text-stone-700 mb-3">烘焙程度</h3>
              <div className="flex items-center gap-2">
                {['浅度', '中度', '中深', '深度'].map((level, i) => {
                  const isActive =
                    (product.roast === '浅度烘焙' && i === 0) ||
                    (product.roast === '中度烘焙' && i === 1) ||
                    (product.roast === '中深度烘焙' && i === 2) ||
                    (product.roast === '深度烘焙' && i === 3);
                  return (
                    <div
                      key={level}
                      className={`h-3 flex-1 rounded-full ${
                        isActive ? 'bg-amber-600' : 'bg-stone-200'
                      }`}
                    />
                  );
                })}
              </div>
              <p className="text-sm text-stone-500 mt-2">{product.roast}</p>
            </div>

            {/* Price & CTA */}
            <div className="flex items-center justify-between pt-6 border-t">
              <div>
                <p className="text-sm text-stone-500">价格</p>
                <p className="text-3xl font-bold text-amber-600">¥{product.price}</p>
              </div>
              <button
                onClick={() => onAddToCart(product)}
                className="bg-stone-800 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-colors duration-200"
              >
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
