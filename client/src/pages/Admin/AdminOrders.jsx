export default function AdminOrders() {
  return (
    <div className="container py-12 space-y-10">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Gestion des Commandes</h1>
          <p className="text-gray-600 mb-6">
            Suivez les commandes client, confirmez les livraisons et restez à jour sur le statut des paiements.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-lg">
              <p className="text-sm uppercase text-amber-900 font-semibold">Commandes totales</p>
              <p className="mt-3 text-3xl font-bold">124</p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5 shadow-lg">
              <p className="text-sm uppercase text-amber-900 font-semibold">En attente</p>
              <p className="mt-3 text-3xl font-bold">18</p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-5 shadow-lg">
              <p className="text-sm uppercase text-amber-900 font-semibold">Livrées</p>
              <p className="mt-3 text-3xl font-bold">92</p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-2xl">
          <img src="/photo1.jpg" alt="Administration des commandes" className="w-full h-full object-cover min-h-[320px]" />
        </div>
      </div>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-[1.5rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Rechercher une commande</h2>
          <p className="text-gray-600">Utilisez le champ de recherche pour retrouver rapidement les commandes par client ou numéro.</p>
        </article>
        <article className="rounded-[1.5rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Statut rapide</h2>
          <p className="text-gray-600">Mettez à jour le statut d'une commande en un clic depuis le tableau de bord.</p>
        </article>
        <article className="rounded-[1.5rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Gestion client</h2>
          <p className="text-gray-600">Consultez les informations de chaque client pour un suivi personnalisé.</p>
        </article>
      </section>
    </div>
  )
}
