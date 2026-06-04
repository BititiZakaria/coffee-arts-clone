export default function MyOrders() {
  const orders = [
    { id: 1, date: '2026-05-15', items: 3, total: 145, status: 'Livrée', image: '/image3.jpg' },
    { id: 2, date: '2026-05-10', items: 2, total: 85, status: 'En transit', image: '/photo1.jpg' },
    { id: 3, date: '2026-05-01', items: 1, total: 35, status: 'Confirmée', image: '/background.PNG' },
  ]

  const getStatusColor = (status) => {
    const colors = {
      'Livrée': 'bg-green-100 text-green-700',
      'En transit': 'bg-blue-100 text-blue-700',
      'Confirmée': 'bg-yellow-100 text-yellow-700',
      'Annulée': 'bg-red-100 text-red-700'
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-10">Mes Commandes</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="grid gap-6 lg:grid-cols-5 items-center rounded-[1.5rem] bg-white p-6 shadow-lg hover:shadow-xl transition">
            <img src={order.image} alt="Commande" className="h-24 w-24 rounded-lg object-cover" />
            <div>
              <p className="text-sm text-gray-600">Commande #{order.id}</p>
              <p className="text-lg font-semibold">{order.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{order.items} article(s)</p>
              <p className="text-lg font-semibold">{order.total}€</p>
            </div>
            <div>
              <span className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            <button className="rounded-full border border-amber-900 px-6 py-3 text-amber-900 font-semibold hover:bg-amber-50 transition">
              Détails
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
