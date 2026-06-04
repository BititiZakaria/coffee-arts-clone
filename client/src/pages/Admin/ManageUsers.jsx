export default function ManageUsers() {
  const users = [
    { id: 1, name: 'Marie Dupont', email: 'marie@example.com', role: 'Client', joined: '2026-01-15', status: 'Actif' },
    { id: 2, name: 'Jean Martin', email: 'jean@example.com', role: 'Admin', joined: '2025-12-01', status: 'Actif' },
    { id: 3, name: 'Sophie Bernard', email: 'sophie@example.com', role: 'Client', joined: '2026-02-20', status: 'Inactif' },
  ]

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Gestion des Utilisateurs</h1>
        <button className="rounded-full bg-amber-900 px-6 py-3 text-white font-semibold hover:bg-amber-800 transition">
          + Ajouter un utilisateur
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-4 font-semibold">Utilisateur</th>
              <th className="px-6 py-4 font-semibold">Email</th>
              <th className="px-6 py-4 font-semibold">Rôle</th>
              <th className="px-6 py-4 font-semibold">Inscrit</th>
              <th className="px-6 py-4 font-semibold">Statut</th>
              <th className="px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-semibold">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                    user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">{user.joined}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                    user.status === 'Actif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-blue-600 font-semibold hover:underline">Modifier</button>
                  <button className="text-red-600 font-semibold hover:underline">Bloquer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
