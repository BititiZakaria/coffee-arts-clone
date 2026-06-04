import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export default function Profile() {
  const { user, logout } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.profile?.phone || '',
    address: user?.profile?.address || '',
    city: user?.profile?.city || '',
    postalCode: user?.profile?.postalCode || '',
    country: user?.profile?.country || ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    setIsEditing(false)
    // Call API to update profile
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-10">Mon Profil</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-[1.5rem] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Informations personnelles</h2>
            
            {!isEditing ? (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Nom</label>
                    <p className="text-lg mt-1">{formData.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Email</label>
                    <p className="text-lg mt-1">{formData.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Téléphone</label>
                    <p className="text-lg mt-1">{formData.phone || '-'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600">Ville</label>
                    <p className="text-lg mt-1">{formData.city || '-'}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-600">Adresse</label>
                  <p className="text-lg mt-1">{formData.address || '-'}</p>
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="rounded-full bg-amber-900 px-6 py-3 text-white font-semibold hover:bg-amber-800 transition"
                >
                  ✍️ Modifier
                </button>
              </div>
            ) : (
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom"
                    className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-900"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-900"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Téléphone"
                    className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-900"
                  />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Ville"
                    className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-900"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Code postal"
                    className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-900"
                  />
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Pays"
                    className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-900"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Adresse"
                  className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-900"
                />
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="rounded-full bg-amber-900 px-6 py-3 text-white font-semibold hover:bg-amber-800 transition"
                  >
                    ✓ Enregistrer
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="rounded-full border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 transition"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-amber-50 p-8 shadow-lg h-fit">
          <h3 className="text-xl font-semibold mb-6">Actions</h3>
          <div className="space-y-3">
            <button className="w-full rounded-full border border-gray-300 px-4 py-2 hover:bg-white transition">
              🔃 Changer le mot de passe
            </button>
            <button className="w-full rounded-full border border-gray-300 px-4 py-2 hover:bg-white transition">
              👁 Préférences de notification
            </button>
            <button
              onClick={logout}
              className="w-full rounded-full border border-red-300 px-4 py-2 text-red-600 hover:bg-red-50 transition font-semibold"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
