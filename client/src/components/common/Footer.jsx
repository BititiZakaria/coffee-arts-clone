import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#F5F0E8] text-[#2A2018] mt-auto">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Coffee Arts" className="h-10 w-auto" />
              <span className="font-serif text-lg">Coffee Arts Paris</span>
            </Link>
            <p className="text-sm text-[#6d6359] max-w-xs">Un lieu où le café de spécialité rencontre l'art de la céramique. Ateliers, boutique et événements.</p>
            <div className="text-sm text-[#6d6359]">
              <div>Adresse: 12 Rue Exemple, 75000 Paris</div>
              <div>Tel: +33 1 23 45 67 89</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Boutique & Services</h4>
              <ul className="space-y-2 text-sm text-[#6d6359]">
                <li><Link to="/shop">Boutique</Link></li>
                <li><Link to="/workshops">Ateliers</Link></li>
                <li><Link to="/menu">Menu</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Infos</h4>
              <ul className="space-y-2 text-sm text-[#6d6359]">
                <li><Link to="/about">À propos</Link></li>
                <li><Link to="/events">Événements</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-sm text-[#6d6359]">Inscrivez-vous pour recevoir les nouveautés et événements.</p>
            <form className="flex w-full max-w-sm" onSubmit={(e)=>e.preventDefault()}>
              <input aria-label="email" placeholder="Votre email" className="px-4 py-2 border border-[#e3dbd2] rounded-l-md text-sm w-full" />
              <button className="bg-[#3D2B1F] text-white px-4 rounded-r-md text-sm">S'inscrire</button>
            </form>

            <div className="flex items-center gap-3 mt-4">
              <a href="#" aria-label="Instagram"><img src="/tiktok.png" alt="social" className="h-6" /></a>
              <a href="#" aria-label="Facebook"><img src="/tiktok-green.png" alt="social" className="h-6" /></a>
              <a href="#" aria-label="TikTok"><img src="/tiktok-beige.png" alt="social" className="h-6" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e6ddd3] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6d6359]">&copy; 2026 Coffee Arts Paris. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <img src="/visa-logo-png-transparent.png" alt="visa" className="h-6" />
            <img src="/Paypal.png" alt="paypal" className="h-6" />
            <img src="/mastercard-png-8.png" alt="mastercard" className="h-6" />
            <img src="/Apple_Pay-Logo.wine.png" alt="apple pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}
