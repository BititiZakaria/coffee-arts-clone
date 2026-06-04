import { useState } from 'react'

export default function ManageBlog() {
  const [showForm, setShowForm] = useState(false)
  const [articles] = useState([
    { id: 1, title: 'Les tendances céramique 2025', author: 'Marie', date: '2026-05-10', status: 'Publié', views: 234 },
    { id: 2, title: 'Guide du café spécialité', author: 'Pierre', date: '2026-05-08', status: 'Brouillon', views: 0 },
    { id: 3, title: 'L\'art du thé japonais', author: 'Sophie', date: '2026-05-05', status: 'Publié', views: 456 },
  ])

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Gestion du Blog</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-full bg-amber-900 px-6 py-3 text-white font-semibold hover:bg-amber-800 transition"
        >
          + Nouvel article
        </button>
      </div>

      {showForm && (
        <div className="mb-10 rounded-[1.5rem] bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Nouvel article de blog</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Titre" className="w-full rounded-lg border px-4 py-3" />
            <textarea placeholder="Contenu" rows="6" className="w-full rounded-lg border px-4 py-3"></textarea>
            <div className="grid gap-4 md:grid-cols-2">
              <input type="text" placeholder="Auteur" className="rounded-lg border px-4 py-3" />
              <select className="rounded-lg border px-4 py-3">
                <option>Statut</option>
                <option>Brouillon</option>
                <option>Publié</option>
              </select>
            </div>
            <div className="flex gap-4">
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

      <div className="space-y-3">
        {articles.map((article) => (
          <div key={article.id} className="flex justify-between items-center rounded-[1.5rem] bg-white p-6 shadow-lg hover:shadow-xl transition">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>👨 {article.author}</span>
                <span>📅 {article.date}</span>
                <span>👁 {article.views} vues</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${
                article.status === 'Publié' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {article.status}
              </span>
              <button className="text-blue-600 font-semibold hover:underline">Modifier</button>
              <button className="text-red-600 font-semibold hover:underline">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
