import { useState } from 'react'

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  
  const product = {
    id: 1,
    name: 'Tasse Artisanale Blanche',
    price: 35,
    rating: 4.8,
    reviews: 24,
    image: '/image3.jpg',
    description: 'Tasse en céramique faite main, désign élégant et minimaliste. Parfaite pour votre café du matin.',
    features: ['100% artisanal', 'Diamètre 8cm', 'Contenance 350ml', 'Glacé haute température'],
    inStock: true
  }

  return (
    <div className="container py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] shadow-2xl bg-white sticky top-12 h-fit">
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400 text-lg">star star star star star</div>
              <span className="text-gray-600">({product.reviews} avis)</span>
            </div>
            <p className="text-3xl font-bold text-amber-900">{product.price}€</p>
          </div>

          <p className="text-gray-600 text-lg">{product.description}</p>

          <div>
            <h3 className="text-xl font-semibold mb-3">Caractéristiques</h3>
            <ul className="space-y-2">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-amber-900 rounded-full"></span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="font-semibold">Quantité:</label>
              <div className="flex items-center border rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-100">-</button>
                <span className="px-4 py-2">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-100">+</button>
              </div>
            </div>

            <button className="w-full rounded-full bg-amber-900 px-6 py-4 text-white text-lg font-semibold hover:bg-amber-800 transition shadow-lg">
              Ajouter au panier
            </button>
            <button className="w-full rounded-full border-2 border-amber-900 px-6 py-4 text-amber-900 text-lg font-semibold hover:bg-amber-50 transition">
              Ajouter aux favoris
            </button>
          </div>

          <div className="rounded-[1.5rem] bg-amber-50 p-6">
            <h3 className="font-semibold mb-2">Livraison rapide</h3>
            <p className="text-sm text-gray-700">Livraison gratuite en Île-de-France pour les commandes supérieures à 50€</p>
          </div>
        </div>
      </div>
    </div>
  )
}
