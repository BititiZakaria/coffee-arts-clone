import { useState, useEffect } from 'react'
import { productService } from '../../services/api'

export default function ManageProducts() {
  const [showForm, setShowForm] = useState(false)
  const [products, setProducts] = useState([])
  const [form, setForm] = useState({ name: '', price: '', stock: '', category: 'accessoires', description: '' })
  const [editingId, setEditingId] = useState(null)

  const load = async () => {
    try {
      const res = await productService.getAll()
      setProducts(res.data || res)
    } catch (err) {
      console.error('Failed loading products', err)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      await productService.create({ ...form, price: parseFloat(form.price), stock: parseInt(form.stock, 10) })
      setForm({ name: '', price: '', stock: '', category: 'accessoires', description: '' })
      setShowForm(false)
      await load()
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Supprimer ce produit ?')) return
    try {
      await productService.delete(id)
      await load()
    } catch (err) {
      console.error(err)
    }
  }

  const startEdit = (p) => {
    setEditingId(p._id)
    setForm({ name: p.name, price: p.price, stock: p.stock, category: p.category, description: p.description || '' })
    setShowForm(true)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await productService.update(editingId, { ...form, price: parseFloat(form.price), stock: parseInt(form.stock, 10) })
      setEditingId(null)
      setShowForm(false)
      await load()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Gestion des Produits</h1>
        <button
          onClick={() => { setShowForm(!showForm); setEditingId(null); setForm({ name: '', price: '', stock: '', category: 'accessoires', description: '' }) }}
          className="rounded-full bg-amber-900 px-6 py-3 text-white font-semibold hover:bg-amber-800 transition"
        >
          + Ajouter un produit
        </button>
      </div>

      {showForm && (
        <div className="mb-10 rounded-[1.5rem] bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">{editingId ? 'Modifier le produit' : 'Nouveau produit'}</h2>
          <form onSubmit={editingId ? handleUpdate : handleCreate} className="grid gap-4 md:grid-cols-2">
            <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Nom du produit" className="rounded-lg border px-4 py-3" />
            <input name="price" value={form.price} onChange={handleChange} type="number" placeholder="Prix" className="rounded-lg border px-4 py-3" />
            <input name="stock" value={form.stock} onChange={handleChange} type="number" placeholder="Stock" className="rounded-lg border px-4 py-3" />
            <select name="category" value={form.category} onChange={handleChange} className="rounded-lg border px-4 py-3">
              <option value="cafe">Café</option>
              <option value="ceramique">Céramique</option>
              <option value="accessoires">Accessoires</option>
            </select>
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="md:col-span-2 rounded-lg border px-4 py-3"></textarea>
            <div className="md:col-span-2 flex gap-4">
              <button type="submit" className="flex-1 rounded-full bg-amber-900 py-3 text-white font-semibold hover:bg-amber-800 transition">
                {editingId ? 'Enregistrer' : 'Créer'}
              </button>
              <button type="button" onClick={() => { setShowForm(false); setEditingId(null) }} className="flex-1 rounded-full border px-6 py-3 font-semibold hover:bg-gray-50">
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-4 font-semibold">Produit</th>
              <th className="px-6 py-4 font-semibold">Prix</th>
              <th className="px-6 py-4 font-semibold">Stock</th>
              <th className="px-6 py-4 font-semibold">Catégorie</th>
              <th className="px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={product.image || '/placeholder.png'} alt="" className="h-10 w-10 rounded-lg object-cover" />
                  {product.name}
                </td>
                <td className="px-6 py-4 font-semibold">{product.price}€</td>
                <td className="px-6 py-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                    product.stock > 10 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4 space-x-2">
                  <button onClick={() => startEdit(product)} className="text-blue-600 font-semibold hover:underline">Modifier</button>
                  <button onClick={() => handleDelete(product._id)} className="text-red-600 font-semibold hover:underline">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
