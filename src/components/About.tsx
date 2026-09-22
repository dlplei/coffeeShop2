export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">关于醇香咖啡</h1>
        <p className="text-stone-500 text-lg">用匠心精神，连接产地与杯中的每一滴醇香</p>
      </div>

      {/* Story */}
      <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 mb-12">
        <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
          <span className="mr-3">🌱</span> 我们的故事
        </h2>
        <p className="text-stone-600 leading-relaxed mb-4">
          醇香咖啡创立于2018年，源于创始人一次深入埃塞俄比亚咖啡产区的旅行。在那里，
          他亲眼见证了咖啡农人们世代传承的种植智慧，也品尝到了令人震撼的精品咖啡风味。
        </p>
        <p className="text-stone-600 leading-relaxed">
          从那以后，我们立志将世界各地最优质的精品咖啡带到中国咖啡爱好者的杯中。
          我们与全球超过20个产区的优质庄园建立了直接贸易关系，确保每一颗咖啡豆都
          从源头到烘焙都经过最严格的把控。
        </p>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <span className="text-4xl mb-4 block">🌍</span>
          <h3 className="font-bold text-stone-800 mb-2">直接贸易</h3>
          <p className="text-stone-500 text-sm">与产地庄园直接合作，确保品质与公平</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <span className="text-4xl mb-4 block">🔥</span>
          <h3 className="font-bold text-stone-800 mb-2">匠心烘焙</h3>
          <p className="text-stone-500 text-sm">小批量精品烘焙，最大程度释放风味</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <span className="text-4xl mb-4 block">📦</span>
          <h3 className="font-bold text-stone-800 mb-2">新鲜直达</h3>
          <p className="text-stone-500 text-sm">烘焙后48小时内发货，锁住最佳风味</p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">我们的成绩</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-amber-600">20+</p>
            <p className="text-sm text-stone-500 mt-1">合作产区</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-600">50K+</p>
            <p className="text-sm text-stone-500 mt-1">满意客户</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-600">100+</p>
            <p className="text-sm text-stone-500 mt-1">精选豆种</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-600">4.9</p>
            <p className="text-sm text-stone-500 mt-1">用户评分</p>
          </div>
        </div>
      </div>
    </div>
  );
}
