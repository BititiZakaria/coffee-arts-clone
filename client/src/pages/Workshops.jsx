export default function Workshops() {
  return (
    <div className="container py-12 space-y-10">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Ateliers créatifs</h1>
          <p className="text-gray-600 mb-6">
            Participez à nos ateliers de céramique et café pour vivre une expérience pratique et sensorielle.
            Réservez votre place et créez une pièce unique en compagnie de nos artisans.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>• Initiation à la poterie pour débutants</li>
            <li>• Technique du modelage et des émaux</li>
            <li>• Atelier café & dégustation</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-2xl">
          <img src="/bgatelier.jpg" alt="Atelier de céramique" className="w-full h-full object-cover min-h-[340px]" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-[1.75rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Réservez en ligne</h2>
          <p className="text-gray-600">Choisissez votre session, payez en ligne et recevez une confirmation instantanée.</p>
        </article>
        <article className="rounded-[1.75rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Encadrement expert</h2>
          <p className="text-gray-600">Nos artisans vous guident à chaque étape pour réaliser une pièce harmonieuse.</p>
        </article>
        <article className="rounded-[1.75rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Cadeau original</h2>
          <p className="text-gray-600">Offrez un moment créatif en famille ou entre amis avec nos bons cadeaux.</p>
        </article>
      </div>
    </div>
  )
}
