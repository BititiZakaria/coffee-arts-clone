import { useState, useEffect, useRef } from 'react'

const MENU_DATA = [
  {
    id: 'espresso',
    category: 'Espresso',
    title: 'Espresso',
    titleEm: '& bases',
    subtitle: 'Nos classiques',
    type: 'rows',
    items: [
      {
        name: 'Espresso',
        desc: "Café intense et riche, extrait en 25–30 secondes",
        price: '2,50€',
        tags: [{ label: 'Single origin', special: true }],
      },
      {
        name: 'Americano',
        desc: "Espresso allongé à l'eau chaude, doux et profond",
        price: '3,00€',
        tags: [],
      },
      {
        name: 'Macchiato',
        desc: "Espresso taché d'une touche de mousse de lait",
        price: '3,50€',
        tags: [],
      },
    ],
  },
  {
    id: 'lait',
    category: 'Boissons chaudes',
    title: 'Boissons',
    titleEm: 'au lait',
    subtitle: 'Veloutées & crémeuses',
    type: 'rows',
    items: [
      {
        name: 'Cappuccino',
        desc: 'Espresso, lait chaud et mousse aérienne en parts égales',
        price: '4,00€',
        tags: [{ label: 'Lait entier' }, { label: 'Végétal +0,50€' }],
      },
      {
        name: 'Latte',
        desc: 'Doux et crémeux, idéal pour commencer la journée',
        price: '4,50€',
        tags: [{ label: 'Lait entier' }, { label: 'Végétal +0,50€' }],
      },
      {
        name: 'Flat White',
        desc: 'Double ristretto et lait velouté, concentré et soyeux',
        price: '4,50€',
        tags: [{ label: 'Signature', special: true }],
      },
    ],
  },
  {
    id: 'cold',
    category: 'Cold & Iced',
    title: 'Cold',
    titleEm: '& Iced',
    subtitle: 'Fraîcheur',
    type: 'grid',
    items: [
      { name: 'Cold Brew',    desc: 'Infusion à froid 18h, doux et peu acide',          price: '4,50€' },
      { name: 'Iced Latte',   desc: 'Espresso sur glace, lait froid et mousse légère',   price: '5,00€' },
      { name: 'Café Tonic',   desc: "Espresso, eau tonique et zeste d'agrume",           price: '5,50€' },
      { name: 'Matcha Latte', desc: 'Matcha cérémonie japonais, lait d\'avoine',         price: '5,00€' },
    ],
  },
]

const ALL_CATEGORIES = ['Tout', ...MENU_DATA.map(s => s.category)]

function useReveal() {
  const refs = useRef([])
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('cm-in') }),
      { threshold: 0.1 }
    )
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return el => { if (el && !refs.current.includes(el)) refs.current.push(el) }
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Tout')
  const addRef = useReveal()

  const visible = MENU_DATA.filter(s =>
    activeCategory === 'Tout' || s.category === activeCategory
  )

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=Jost:wght@300;400;500&display=swap');
        :root {
          --cm-beige: #F5F0E8; --cm-beige-dark: #EDE5D8; --cm-sand: #D9CEBF;
          --cm-brown: #3D2B1F; --cm-olive: #5C6B4A; --cm-muted: #8C7B6B;
          --cm-white: #FAFAF8; --cm-accent: #8B6914;
        }
        .cm-wrap { font-family: 'Jost', sans-serif; font-weight: 300; background: var(--cm-beige); color: var(--cm-brown); }

        /* HERO */
        .cm-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 480px; overflow: hidden; }
        .cm-hero-img { position: relative; overflow: hidden; }
        .cm-hero-img img { width: 100%; height: 100%; object-fit: cover; min-height: 480px; display: block; filter: sepia(10%) saturate(1.05); }
        .cm-hero-img-overlay { position: absolute; inset: 0; background: linear-gradient(to right, transparent 55%, rgba(237,229,216,0.2)); }
        .cm-hero-content {
          background: var(--cm-beige-dark); display: flex; flex-direction: column;
          justify-content: center; padding: 80px 60px; position: relative;
        }
        .cm-hero-content::before {
          content: ''; position: absolute; left: -40px; top: 0; bottom: 0; width: 80px;
          background: var(--cm-beige-dark);
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 50%); z-index: 2;
        }
        .cm-eyebrow {
          font-size: 11px; font-weight: 500; letter-spacing: .3em; text-transform: uppercase;
          color: var(--cm-olive); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;
        }
        .cm-eyebrow::before { content: ''; width: 24px; height: 1px; background: var(--cm-olive); }
        .cm-hero-content h1 { font-family: 'Playfair Display', serif; font-size: clamp(38px, 5vw, 64px); font-weight: 400; line-height: 1.05; color: var(--cm-brown); margin-bottom: 24px; }
        .cm-hero-content h1 em { font-style: italic; color: var(--cm-accent); }
        .cm-hero-content p { font-size: 15px; line-height: 1.85; color: var(--cm-muted); max-width: 380px; }

        /* DIVIDER */
        .cm-divider { height: 1px; background: var(--cm-sand); margin: 0 48px; }

        /* CATEGORY NAV */
        .cm-cat-nav { padding: 40px 48px 0; display: flex; gap: 4px; flex-wrap: wrap; }
        .cm-cat-btn {
          font-size: 11px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase;
          padding: 10px 20px; border: 1px solid var(--cm-sand); background: transparent;
          color: var(--cm-muted); cursor: pointer; transition: all .25s; font-family: 'Jost', sans-serif;
        }
        .cm-cat-btn:hover, .cm-cat-btn.cm-active { background: var(--cm-brown); color: var(--cm-white); border-color: var(--cm-brown); }

        /* MENU SECTION */
        .cm-menu-section { padding: 56px 48px 96px; }
        .cm-category { margin-bottom: 72px; }
        .cm-category:last-child { margin-bottom: 0; }
        .cm-cat-header {
          display: flex; align-items: baseline; gap: 20px;
          padding-bottom: 20px; border-bottom: 1px solid var(--cm-sand); margin-bottom: 0;
        }
        .cm-cat-title { font-family: 'Playfair Display', serif; font-size: clamp(28px, 3vw, 42px); font-weight: 400; color: var(--cm-brown); }
        .cm-cat-title em { font-style: italic; }
        .cm-cat-subtitle { font-size: 12px; font-weight: 400; letter-spacing: .2em; text-transform: uppercase; color: var(--cm-muted); }

        /* ROW LAYOUT */
        .cm-rows { display: flex; flex-direction: column; }
        .cm-row {
          display: grid; grid-template-columns: 1fr auto; align-items: center;
          gap: 32px; padding: 22px 0; border-bottom: 1px solid rgba(217,206,191,0.5);
          position: relative; cursor: default;
        }
        .cm-row::before {
          content: ''; position: absolute; left: -16px; right: -16px; top: 0; bottom: 0;
          background: var(--cm-beige-dark); opacity: 0; transition: opacity .25s; z-index: -1;
        }
        .cm-row:hover::before { opacity: 1; }
        .cm-row:last-child { border-bottom: none; }
        .cm-item-name { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 400; color: var(--cm-brown); margin-bottom: 5px; }
        .cm-item-desc { font-size: 13px; line-height: 1.7; color: var(--cm-muted); }
        .cm-tags { display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap; }
        .cm-tag {
          font-size: 10px; font-weight: 500; letter-spacing: .15em; text-transform: uppercase;
          padding: 3px 10px; border: 1px solid var(--cm-sand); color: var(--cm-muted);
        }
        .cm-tag-special { border-color: var(--cm-olive); color: var(--cm-olive); }
        .cm-item-price { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 400; color: var(--cm-brown); white-space: nowrap; }

        /* GRID LAYOUT */
        .cm-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: var(--cm-sand); }
        .cm-grid-card { background: var(--cm-beige); padding: 32px 28px; transition: background .3s; }
        .cm-grid-card:hover { background: var(--cm-white); }
        .cm-grid-card .cm-item-name { font-size: 18px; margin-bottom: 6px; }
        .cm-grid-card .cm-item-price { font-size: 20px; margin-top: 16px; display: block; }

        /* REVEAL */
        .cm-reveal { opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease; }
        .cm-reveal.cm-in { opacity: 1; transform: translateY(0); }

        @media (max-width: 768px) {
          .cm-hero { grid-template-columns: 1fr; }
          .cm-hero-img { display: none; }
          .cm-hero-content::before { display: none; }
          .cm-hero-content { padding: 60px 24px; }
          .cm-divider { margin: 0 24px; }
          .cm-cat-nav, .cm-menu-section { padding-left: 24px; padding-right: 24px; }
          .cm-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cm-wrap">

        {/* HERO */}
        <section className="cm-hero">
          <div className="cm-hero-img">
            <img src="/cofee new.png" alt="Notre café" />
            <div className="cm-hero-img-overlay" />
          </div>
          <div className="cm-hero-content">
            <p className="cm-eyebrow">La carte</p>
            <h1>Notre<br /><em>Menu</em></h1>
            <p>Cafés de spécialité, boissons chaudes et petite restauration — préparés avec soin par nos baristas pour chaque moment de la journée.</p>
          </div>
        </section>

        <div className="cm-divider" />

        {/* CATEGORY NAV */}
        <div className="cm-cat-nav">
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`cm-cat-btn${activeCategory === cat ? ' cm-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MENU */}
        <div className="cm-menu-section">
          {visible.map(section => (
            <div key={section.id} className="cm-category cm-reveal" ref={addRef}>
              <div className="cm-cat-header">
                <h2 className="cm-cat-title">
                  {section.title} <em>{section.titleEm}</em>
                </h2>
                <span className="cm-cat-subtitle">{section.subtitle}</span>
              </div>

              {section.type === 'rows' ? (
                <div className="cm-rows">
                  {section.items.map((item, i) => (
                    <div key={i} className="cm-row">
                      <div>
                        <div className="cm-item-name">{item.name}</div>
                        <div className="cm-item-desc">{item.desc}</div>
                        {item.tags?.length > 0 && (
                          <div className="cm-tags">
                            {item.tags.map((t, j) => (
                              <span key={j} className={`cm-tag${t.special ? ' cm-tag-special' : ''}`}>
                                {t.label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="cm-item-price">{item.price}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="cm-grid">
                  {section.items.map((item, i) => (
                    <div key={i} className="cm-grid-card">
                      <div className="cm-item-name">{item.name}</div>
                      <div className="cm-item-desc">{item.desc}</div>
                      <span className="cm-item-price">{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </>
  )
}