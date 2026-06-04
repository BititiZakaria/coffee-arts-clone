export default function AdminDashboard() {
  const stats = [
    { label: 'Produits', value: '48', icon: '📦', color: 'bg-blue-100 text-blue-700' },
    { label: 'Ateliers', value: '14', icon: '🎨', color: 'bg-green-100 text-green-700' },
    { label: 'Commandes', value: '156', icon: '🛍️', color: 'bg-yellow-100 text-yellow-700' },
    { label: 'Messages', value: '23', icon: '💬', color: 'bg-red-100 text-red-700' },
  ]

  const recentOrders = [
    { id: 1, client: 'Marie Dupont', amount: 145, status: 'Livrée', date: '2026-05-15' },
    { id: 2, client: 'Jean Martin', amount: 85, status: 'En transit', date: '2026-05-14' },
    { id: 3, client: 'Sophie Bernard', amount: 210, status: 'Confirmée', date: '2026-05-13' },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-10">Dashboard Admin</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="rounded-[1.5rem] bg-white p-6 shadow-lg hover:shadow-xl transition">
            <div className={`inline-block rounded-lg p-3 mb-4 ${stat.color} text-2xl`}>
              {stat.icon}
            </div>
            <p className="text-gray-600 text-sm font-semibold">{stat.label}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[1.5rem] bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Commandes récentes</h2>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-semibold">{order.client}</p>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{order.amount}€</p>
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Statistiques</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Taux de conversion</span>
                <span className="font-semibold">3.2%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-1/3"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Clients actifs</span>
                <span className="font-semibold">284</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-2/3"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Produits en stock</span>
                <span className="font-semibold">92%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 w-11/12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
