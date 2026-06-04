export default function Blog() {
  return (
    <div className="container py-12 space-y-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Blog Coffee Arts</h1>
          <p className="text-gray-600 mb-6">
            Explorez nos articles sur le café, la céramique, le lifestyle et les tendances créatives.
            Inspirez-vous de nos conseils, interviews et guides pratiques.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-2xl">
          <img src="/les-tendances-ceramique-2025.webp" alt="Blog Coffee Arts" className="w-full h-full object-cover min-h-[320px]" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-[1.75rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Café et céramique</h2>
          <p className="text-gray-600">Découvrir l'alliance entre café de spécialité et art de la table.</p>
        </article>
        <article className="rounded-[1.75rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Tendances</h2>
          <p className="text-gray-600">Suivez les tendances créatives du moment et nos recommandations design.</p>
        </article>
        <article className="rounded-[1.75rem] bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">Conseils pratiques</h2>
          <p className="text-gray-600">Apprenez à choisir votre café, entretenir vos outils et sublimer vos créations.</p>
        </article>
      </div>
    </div>
  )
}
