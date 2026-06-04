export default function AdminBookings() {
  const bookings = [
    { id: 1, client: 'Marie Dupont', workshop: 'Initiation poterie', date: '2026-06-15', status: 'Confirmé', participants: 5, image: '/bgatelier.jpg' },
    { id: 2, client: 'Jean Martin', workshop: 'Atelier avancé', date: '2026-06-22', status: 'En attente', participants: 3, image: '/ceramic-pottery-workshop-hands-creating-clay-potte.jpg' },
    { id: 3, client: 'Sophie Bernard', workshop: 'Dégustation café', date: '2026-06-08', status: 'Terminé', participants: 8, image: '/cafe-ceramique-laccord-parfait.webp' },
  ]

  const getStatusColor = (status) => {
    const colors = {
      'Confirmé': 'bg-green-100 text-green-700',
      'En attente': 'bg-yellow-100 text-yellow-700',
      'Terminé': 'bg-gray-100 text-gray-700',
      'Annulée': 'bg-red-100 text-red-700'
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-10">Gestion des Réservations</h1>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="grid gap-6 lg:grid-cols-6 items-center rounded-[1.5rem] bg-white p-6 shadow-lg hover:shadow-xl transition">
            <img src={booking.image} alt="Atelier" className="h-20 w-20 rounded-lg object-cover" />
            <div>
              <p className="text-sm text-gray-600">Client</p>
              <p className="text-lg font-semibold">{booking.client}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Atelier</p>
              <p className="text-lg font-semibold">{booking.workshop}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date</p>
              <p className="text-lg font-semibold">{booking.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Participants</p>
              <p className="text-lg font-semibold">{booking.participants}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${getStatusColor(booking.status)}`}>
                {booking.status}
              </span>
              <div className="flex gap-2 text-sm">
                <button className="text-blue-600 font-semibold hover:underline">Modifier</button>
                <button className="text-red-600 font-semibold hover:underline">Annuler</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
