import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',          label: 'Accueil'     },
  { to: '/menu',      label: 'Menu'        },
  { to: '/workshops', label: 'Ateliers'    },
  { to: '/shop',      label: 'Boutique'    },
  { to: '/events',    label: 'Événements'  },
  { to: '/blog',      label: 'Blog'        },
  { to: '/about',     label: 'À propos'    },
  { to: '/contact',   label: 'Contact'     },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }          = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --nb-beige: #F5F0E8;
          --nb-sand:  #D9CEBF;
          --nb-brown: #3D2B1F;
          --nb-olive: #5C6B4A;
          --nb-muted: #8C7B6B;
          --nb-white: #FAFAF8;
          --nb-text:  #2A2018;
        }

        .nb-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(245,240,232,0.96);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(61,43,31,0.1);
          transition: box-shadow .3s;
          font-family: 'Jost', sans-serif;
        }
        .nb-nav.nb-scrolled { box-shadow: 0 4px 24px rgba(61,43,31,0.08); }

        .nb-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 68px;
        }

        /* Logo */
        .nb-logo {
          font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 400;
          color: var(--nb-brown); text-decoration: none; letter-spacing: 0.03em;
          display: flex; align-items: center; gap: 10px; flex-shrink: 0;
        }
        .nb-logo-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--nb-olive); margin-top: 1px; flex-shrink: 0;
        }

        /* Desktop links */
        .nb-links {
          display: flex; align-items: center; gap: 4px;
          list-style: none; margin: 0; padding: 0;
        }
        .nb-links a {
          font-size: 12px; font-weight: 400; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--nb-muted);
          text-decoration: none; padding: 8px 14px; position: relative;
          transition: color .25s;
        }
        .nb-links a::after {
          content: ''; position: absolute; bottom: 4px;
          left: 14px; right: 14px; height: 1px; background: var(--nb-olive);
          transform: scaleX(0); transform-origin: left; transition: transform .3s ease;
        }
        .nb-links a:hover              { color: var(--nb-brown); }
        .nb-links a:hover::after       { transform: scaleX(1); }
        .nb-links a.nb-active          { color: var(--nb-brown); }
        .nb-links a.nb-active::after   { transform: scaleX(1); }

        /* CTA button */
        .nb-cta {
          font-size: 11px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--nb-white);
          background: var(--nb-brown); padding: 10px 22px;
          text-decoration: none; flex-shrink: 0;
          transition: background .3s; border: none; cursor: pointer;
          font-family: 'Jost', sans-serif;
        }
        .nb-cta:hover { background: var(--nb-text); }

        /* Burger */
        .nb-burger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; background: none; border: none; padding: 6px;
        }
        .nb-burger span {
          display: block; width: 22px; height: 1.5px;
          background: var(--nb-brown);
          transition: transform .35s ease, opacity .25s ease;
          transform-origin: center;
        }
        .nb-burger.nb-open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nb-burger.nb-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nb-burger.nb-open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* Mobile drawer */
        .nb-drawer {
          display: none; position: absolute; top: 68px; left: 0; right: 0;
          background: var(--nb-beige); border-top: 1px solid var(--nb-sand);
          flex-direction: column; padding: 16px 32px 24px;
          box-shadow: 0 8px 32px rgba(61,43,31,0.1);
        }
        .nb-drawer.nb-open { display: flex; }
        .nb-drawer a {
          font-size: 13px; font-weight: 400; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--nb-muted);
          text-decoration: none; padding: 14px 0;
          border-bottom: 1px solid var(--nb-sand); transition: color .2s;
        }
        .nb-drawer a:last-of-type { border-bottom: none; }
        .nb-drawer a:hover, .nb-drawer a.nb-active { color: var(--nb-brown); }
        .nb-drawer-cta {
          margin-top: 20px; font-size: 12px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--nb-white); background: var(--nb-brown);
          padding: 14px; border: none; width: 100%; cursor: pointer;
          font-family: 'Jost', sans-serif; transition: background .3s;
        }
        .nb-drawer-cta:hover { background: var(--nb-text); }

        @media (max-width: 1024px) {
          .nb-links, .nb-cta { display: none; }
          .nb-burger { display: flex; }
          .nb-inner { padding: 0 24px; }
        }
      `}</style>

      <nav className={`nb-nav${scrolled ? ' nb-scrolled' : ''}`}>
        <div className="nb-inner">

          {/* Logo */}
          <Link to="/" className="nb-logo">
            <div className="nb-logo-dot" />
            Coffee Arts Paris
          </Link>

          {/* Desktop nav */}
          <ul className="nb-links">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={pathname === to ? 'nb-active' : ''}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link to="/workshops" className="nb-cta">Réserver</Link>

          {/* Burger */}
          <button
            type="button"
            className={`nb-burger${open ? ' nb-open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`nb-drawer${open ? ' nb-open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className={pathname === to ? 'nb-active' : ''}>
              {label}
            </Link>
          ))}
          <button className="nb-drawer-cta">Réserver un atelier</button>
        </div>
      </nav>
    </>
  )
}