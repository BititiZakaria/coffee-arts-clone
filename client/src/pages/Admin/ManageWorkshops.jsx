import { useEffect, useState } from 'react'
import { workshopService } from '../../services/api'

export default function ManageWorkshops() {
  const [workshops, setWorkshops] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', date: '', capacity: 10, price: 0 })

  const load = async () => {
    try {
      const res = await workshopService.getAll()
      setWorkshops(res.data || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      const res = await workshopService.create(form)
      setWorkshops((s) => [res.data, ...s])
      setShowForm(false)
      setForm({ title: '', date: '', capacity: 10, price: 0 })
    } catch (err) { console.error(err) }
  }

  return (
    <div className="container py-12 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Gestion des Ateliers</h1>
        <button onClick={() => setShowForm(!showForm)} className="rounded-full bg-amber-900 px-6 py-3 text-white font-semibold">+ Atelier</button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="rounded-[1.5rem] bg-white p-6 shadow-lg space-y-4">
          <input required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Titre" className="w-full rounded-lg border px-4 py-3" />
          <div className="grid md:grid-cols-3 gap-3">
            <input required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} type="date" className="rounded-lg border px-4 py-3" />
            <input required value={form.capacity} onChange={e => setForm({ ...form, capacity: Number(e.target.value) })} type="number" className="rounded-lg border px-4 py-3" />
            <input required value={form.price} onChange={e => setForm({ ...form, price: Number(e.target.value) })} type="number" step="0.01" className="rounded-lg border px-4 py-3" />
          </div>
          <div className="flex gap-3">
            <button type="submit" className="rounded-full bg-amber-900 px-6 py-3 text-white font-semibold">Créer</button>
            <button type="button" onClick={() => setShowForm(false)} className="rounded-full border px-6 py-3">Annuler</button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {loading ? <p>Chargement...</p> : (
          workshops.map(w => (
            <div key={w._id || w.id} className="rounded-[1.5rem] bg-white p-6 shadow-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{w.title || w.name}</h3>
                <p className="text-sm text-gray-600">{w.date} • {w.capacity} places • {w.price ? `${w.price}€` : ''}</p>
              </div>
              <div className="flex gap-3">
                <button className="text-blue-600">Modifier</button>
                <button className="text-red-600" onClick={async () => {
                  if (!confirm('Supprimer cet atelier ?')) return
                  try {
                    await workshopService.delete(w._id || w.id)
                    setWorkshops(s => s.filter(x => (x._id || x.id) !== (w._id || w.id)))
                  } catch (err) { console.error(err) }
                }}>Supprimer</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
