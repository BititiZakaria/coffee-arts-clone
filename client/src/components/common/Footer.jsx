export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-auto">
      <div className="container">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">À propos</h3>
            <p>Coffee Arts Paris - Café de spécialité et céramique</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Liens</h3>
            <ul className="space-y-2">
              <li><a href="/about">À propos</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p>Email: info@coffeearts.com</p>
            <p>Tel: +33 1 23 45 67 89</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2026 Coffee Arts. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
