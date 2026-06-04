export default function Contact() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <form className="max-w-md">
        <input type="text" placeholder="Nom" className="w-full mb-4 p-2 border" />
        <input type="email" placeholder="Email" className="w-full mb-4 p-2 border" />
        <input type="text" placeholder="Objet" className="w-full mb-4 p-2 border" />
        <textarea placeholder="Message" className="w-full mb-4 p-2 border" rows="5"></textarea>
        <button type="submit" className="bg-amber-900 text-white px-6 py-2">Envoyer</button>
      </form>
    </div>
  )
}
