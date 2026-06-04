import { useState } from 'react'

export default function ManageProducts() {
  const [showForm, setShowForm] = useState(false)
  const [products] = useState([
    { id: 1, name: 'Tasse Blanche', price: 35, stock: 24, category: 'Céramique', image: '/image3.jpg' },
    { id: 2, name: 'Espresso Premium', price: 15, stock: 156, category: 'Café', image: '/cofee new.png' },
    { id: 3, name: 'Bol Artisanal', price: 45, stock: 8, category: 'Céramique', image: '/photo1.jpg' },
  ])

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Gestion des Produits</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-full bg-amber-900 px-6 py-3 text-white font-semibold hover:bg-amber-800 transition"
        >
          + Ajouter un produit
        </button>
      </div>

      {showForm && (
        <div className="mb-10 rounded-[1.5rem] bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Nouveau produit</h2>
          <form className="grid gap-4 md:grid-cols-2">
            <input type="text" placeholder="Nom du produit" className="rounded-lg border px-4 py-3" />
            <input type="number" placeholder="Prix" className="rounded-lg border px-4 py-3" />
            <input type="number" placeholder="Stock" className="rounded-lg border px-4 py-3" />
            <select className="rounded-lg border px-4 py-3">
              <option>Catégorie</option>
              <option>Café</option>
              <option>Céramique</option>
            </select>
            <textarea placeholder="Description" className="md:col-span-2 rounded-lg border px-4 py-3"></textarea>
            <div className="md:col-span-2 flex gap-4">
              <button type="submit" className="flex-1 rounded-full bg-amber-900 py-3 text-white font-semibold hover:bg-amber-800 transition">
                Créer
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="flex-1 rounded-full border px-6 py-3 font-semibold hover:bg-gray-50">
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
              <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={product.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
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
                  <button className="text-blue-600 font-semibold hover:underline">Modifier</button>
                  <button className="text-red-600 font-semibold hover:underline">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
