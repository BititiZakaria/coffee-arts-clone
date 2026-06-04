export default function Contact() {
  return (
    <div className="container py-12">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr] items-start">
        <div>
          <h1 className="text-3xl font-bold mb-6">Contact</h1>
          <form className="max-w-md space-y-4">
            <input type="text" placeholder="Nom" className="w-full rounded-xl border border-gray-300 p-3" />
            <input type="email" placeholder="Email" className="w-full rounded-xl border border-gray-300 p-3" />
            <input type="text" placeholder="Objet" className="w-full rounded-xl border border-gray-300 p-3" />
            <textarea placeholder="Message" className="w-full rounded-xl border border-gray-300 p-3" rows="5"></textarea>
            <button type="submit" className="rounded-full bg-amber-900 px-6 py-3 text-white hover:bg-amber-800 transition">Envoyer</button>
          </form>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-2xl">
          <img src="/image3.jpg" alt="Contact Coffee Arts" className="w-full h-full object-cover min-h-[420px]" />
        </div>
      </div>
    </div>
  )
}
