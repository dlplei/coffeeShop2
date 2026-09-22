interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">☕</div>
        <div className="absolute top-40 right-20 text-6xl">🫘</div>
        <div className="absolute bottom-20 left-1/3 text-7xl">☕</div>
        <div className="absolute bottom-10 right-10 text-5xl">🫘</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            探索世界
            <span className="text-amber-400">精品咖啡</span>
            <br />的无限风味
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-10 leading-relaxed">
            从埃塞俄比亚的高原到哥伦比亚的山谷，我们精选全球最优质的单品咖啡豆，
            <br className="hidden md:block" />
            为您带来每一杯都令人惊叹的咖啡体验。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('products')}
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-amber-500/25"
            >
              浏览全部咖啡
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105"
            >
              了解更多
            </button>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafaf9"/>
        </svg>
      </div>
    </section>
  );
}
