export default function ManageWorkshops() {
  return (
    <div className="container py-12 space-y-10">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Gestion des Ateliers</h1>
          <p className="text-gray-600 mb-6">
            Gérez les ateliers, révisez les sessions disponibles et modifiez facilement les descriptions et les prix.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-lg">
              <p className="text-sm uppercase text-amber-900 font-semibold">Ateliers actifs</p>
              <p className="mt-3 text-3xl font-bold">14</p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5 shadow-lg">
              <p className="text-sm uppercase text-amber-900 font-semibold">Réservations</p>
              <p className="mt-3 text-3xl font-bold">46</p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5 shadow-lg">
              <p className="text-sm uppercase text-amber-900 font-semibold">Prochaine session</p>
              <p className="mt-3 text-3xl font-bold">Sam 12 Juin</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-2xl">
          <img src="/ceramic-pottery-workshop-hands-creating-clay-potte.jpg" alt="Gestion des ateliers" className="w-full h-full object-cover min-h-[320px]" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-[1.5rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Ajouter un atelier</h2>
          <p className="text-gray-600">Créez une nouvelle session avec date, capacité et tarif en quelques clics.</p>
        </article>
        <article className="rounded-[1.5rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Modifier un atelier</h2>
          <p className="text-gray-600">Changez les détails d'une session sans perdre les réservations existantes.</p>
        </article>
        <article className="rounded-[1.5rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Supprimer un atelier</h2>
          <p className="text-gray-600">Retirez une session obsolète et publiez rapidement les nouvelles offres.</p>
        </article>
      </div>
    </div>
  )
}
