export default function Navbar() {
  return (
    <nav className="bg-amber-900 text-white p-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Coffee Arts</h1>
          <ul className="flex gap-6">
            <li><a href="/">Accueil</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/workshops">Ateliers</a></li>
            <li><a href="/shop">Boutique</a></li>
            <li><a href="/events">Événements</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
