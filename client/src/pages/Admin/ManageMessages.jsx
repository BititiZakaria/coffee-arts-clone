export default function ManageMessages() {
  const messages = [
    { id: 1, from: 'marie@example.com', subject: 'Question sur les ateliers', date: '2026-05-15', preview: 'Je voudrais connaître les tarifs...', read: false },
    { id: 2, from: 'jean@example.com', subject: 'Livraison défectueuse', date: '2026-05-14', preview: 'La tasse arrivée est cassée...', read: true },
    { id: 3, from: 'sophie@example.com', subject: 'Feedback positif', date: '2026-05-13', preview: 'J\'adore votre produit...', read: true },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-10">Messages de Contact</h1>

      <div className="space-y-3">
        {messages.map((message) => (
          <div key={message.id} className={`flex justify-between items-center rounded-[1.5rem] p-6 shadow-lg hover:shadow-xl transition ${
            message.read ? 'bg-white' : 'bg-blue-50 border-2 border-blue-200'
          }`}>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold">{message.subject}</h3>
                {!message.read && (
                  <span className="inline-block h-2 w-2 rounded-full bg-blue-600"></span>
                )}
              </div>
              <p className="text-gray-600 mb-2 text-sm">{message.from}</p>
              <p className="text-gray-700">{message.preview}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-gray-500">{message.date}</span>
              <div className="flex gap-2">
                <button className="rounded-lg bg-amber-900 px-4 py-2 text-white text-sm font-semibold hover:bg-amber-800 transition">
                  Répondre
                </button>
                <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50">
                  Archive
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
