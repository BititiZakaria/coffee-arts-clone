import { useEffect, useState } from 'react'
import { blogService } from '../../services/api'

export default function ManageBlog() {
  const [showForm, setShowForm] = useState(false)
  const [articles, setArticles] = useState([])
  const [form, setForm] = useState({ title: '', content: '', author: '', status: 'Brouillon' })

  const load = async () => {
    try {
      const res = await blogService.getAll()
      setArticles(res.data || [])
    } catch (err) { console.error(err) }
  }

  useEffect(() => { load() }, [])

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      const res = await blogService.create(form)
      setArticles(a => [res.data, ...a])
      setShowForm(false)
      setForm({ title: '', content: '', author: '', status: 'Brouillon' })
    } catch (err) { console.error(err) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Supprimer cet article ?')) return
    try {
      await blogService.delete(id)
      setArticles(a => a.filter(x => x._id !== id && x.id !== id))
    } catch (err) { console.error(err) }
  }

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Gestion du Blog</h1>
        <button onClick={() => setShowForm(!showForm)} className="rounded-full bg-amber-900 px-6 py-3 text-white font-semibold">+ Nouvel article</button>
      </div>

      {showForm && (
        <div className="mb-10 rounded-[1.5rem] bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Nouvel article de blog</h2>
          <form onSubmit={handleCreate} className="space-y-4">
            <input required value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} type="text" placeholder="Titre" className="w-full rounded-lg border px-4 py-3" />
            <textarea required value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} placeholder="Contenu" rows="6" className="w-full rounded-lg border px-4 py-3"></textarea>
            <div className="grid gap-4 md:grid-cols-2">
              <input required value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} type="text" placeholder="Auteur" className="rounded-lg border px-4 py-3" />
              <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className="rounded-lg border px-4 py-3">
                <option>Brouillon</option>
                <option>Publié</option>
              </select>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="flex-1 rounded-full bg-amber-900 py-3 text-white font-semibold">Créer</button>
              <button type="button" onClick={() => setShowForm(false)} className="flex-1 rounded-full border px-6 py-3 font-semibold">Annuler</button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-3">
        {articles.map((article) => (
          <div key={article._id || article.id} className="flex justify-between items-center rounded-[1.5rem] bg-white p-6 shadow-lg hover:shadow-xl transition">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>👨 {article.author}</span>
                <span>📅 {new Date(article.createdAt || article.date || Date.now()).toISOString().slice(0,10)}</span>
                <span>👁 {article.views || 0} vues</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${
                (article.status || 'Brouillon') === 'Publié' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {article.status || 'Brouillon'}
              </span>
              <button className="text-blue-600 font-semibold">Modifier</button>
              <button onClick={() => handleDelete(article._id || article.id)} className="text-red-600 font-semibold">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
