import { useEffect, useState } from 'react'
import { orderService } from '../../services/api'

export default function AdminOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    try {
      const res = await orderService.getAll()
      setOrders(res.data || [])
    } catch (err) { console.error(err) } finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  const updateStatus = async (id, status) => {
    try {
      await orderService.update?.(id, { status })
      setOrders(o => o.map(x => ((x._id || x.id) === id ? { ...x, status } : x)))
    } catch (err) { console.error(err) }
  }

  return (
    <div className="container py-12 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Gestion des Commandes</h1>
      </div>

      <div>
        {loading ? <p>Chargement...</p> : (
          orders.length === 0 ? <p>Aucune commande</p> : (
            <div className="space-y-4">
              {orders.map(o => (
                <div key={o._id || o.id} className="rounded-[1.5rem] bg-white p-6 shadow-lg flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">Commande #{o._id?.slice(-6) || (o.id && o.id.slice(-6))}</h3>
                    <p className="text-sm text-gray-600">Client: {o.customerName || o.user?.name || o.email} • Total: {o.total || o.amount || ''}€</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <select value={o.status || 'pending'} onChange={e => updateStatus(o._id || o.id, e.target.value)} className="rounded-lg border px-3 py-2">
                      <option value="pending">En attente</option>
                      <option value="confirmed">Confirmée</option>
                      <option value="shipped">Expédiée</option>
                      <option value="delivered">Livrée</option>
                    </select>
                    <button className="text-blue-600">Voir</button>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}
