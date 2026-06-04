export default function MyBookings() {
  const bookings = [
    { id: 1, workshop: 'Initiation à la poterie', date: '2026-06-15', time: '14:00-17:00', instructor: 'Marie Dupont', image: '/bgatelier.jpg', status: 'Confirmé' },
    { id: 2, workshop: 'Atelier céramique avancé', date: '2026-06-22', time: '10:00-13:00', instructor: 'Pierre Martin', image: '/ceramic-pottery-workshop-hands-creating-clay-potte.jpg', status: 'Confirmé' },
    { id: 3, workshop: 'Dégustation café & céramique', date: '2026-06-08', time: '15:30-17:30', instructor: 'Sophie Bernard', image: '/cafe-ceramique-laccord-parfait.webp', status: 'Terminé' },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-10">Mes Réservations d'Ateliers</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <div key={booking.id} className="rounded-[1.5rem] bg-white shadow-lg overflow-hidden hover:shadow-2xl transition hover:-translate-y-2">
            <div className="relative">
              <img src={booking.image} alt={booking.workshop} className="h-40 w-full object-cover" />
              <span className={`absolute top-4 right-4 inline-block rounded-full px-4 py-1 text-sm font-semibold ${
                booking.status === 'Confirmé' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {booking.status}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{booking.workshop}</h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p>📅 {booking.date}</p>
                <p>🕒 {booking.time}</p>
                <p>👨‍🏫 {booking.instructor}</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 rounded-full bg-amber-900 py-2 text-white font-semibold hover:bg-amber-800 transition">
                  Annuler
                </button>
                <button className="flex-1 rounded-full border border-amber-900 py-2 text-amber-900 font-semibold hover:bg-amber-50 transition">
                  Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
