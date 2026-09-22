export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">☕</span>
              <span className="text-xl font-bold text-white">醇香咖啡</span>
            </div>
            <p className="text-sm leading-relaxed">
              致力于为全球咖啡爱好者提供最优质的精品咖啡豆。
              每一颗豆子都经过严格筛选和精心烘焙。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">全部咖啡</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">订阅计划</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">冲煮指南</span></li>
              <li><span className="hover:text-amber-400 cursor-pointer transition-colors">常见问题</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 hello@chunxiang.coffee</li>
              <li>📞 400-888-9999</li>
              <li>📍 上海市静安区咖啡街88号</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <span className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors text-sm">微</span>
              <span className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors text-sm">博</span>
              <span className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors text-sm">抖</span>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-8 text-center text-sm">
          <p>© 2024 醇香咖啡. All rights reserved. | 沪ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}
