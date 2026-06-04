export default function AdminDashboard() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-100 p-6 rounded">
          <h3>Produits</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-green-100 p-6 rounded">
          <h3>Ateliers</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded">
          <h3>Commandes</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-red-100 p-6 rounded">
          <h3>Messages</h3>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  )
}
