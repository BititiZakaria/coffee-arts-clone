export default function Shop() {
  const products = [
    {
      img: '/image3.jpg',
      tag: 'Café',
      title: 'Coffret découverte',
      desc: 'Un ensemble de cafés soigneusement sélectionnés pour explorer de nouvelles saveurs.',
      price: '34,00 €',
    },
    {
      img: '/photo1.jpg',
      tag: 'Céramique',
      title: 'Tasse artisanale',
      desc: 'Façonnée à la main dans notre atelier. Chaque pièce est unique, aucune ne se ressemble.',
      price: '28,00 €',
    },
    {
      img: '/background.PNG',
      tag: 'Cadeau',
      title: 'Coffret cadeau',
      desc: 'Café de spécialité et tasse céramique réunis dans un écrin élégant à offrir.',
      price: '56,00 €',
    },
  ]

  return (
    <main style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: '#f5f0e8', color: '#1a1a1a' }}>

      {/* ── HERO SPLIT ── */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: '80vh'
      }} className="shop-hero">
        {/* Left — text */}
        <div style={{
          padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#8a7c6e', marginBottom: '1.2rem'
          }}>La boutique</p>
          <h1 style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
            fontWeight: 300, lineHeight: 1.0,
            letterSpacing: '-0.01em', marginBottom: '1.8rem'
          }}>
            Emporter<br />un morceau<br />de Coffee Arts
          </h1>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem',
            lineHeight: 1.8, color: '#6b5e52', maxWidth: '420px',
            marginBottom: '3rem'
          }}>
            Cafés de spécialité, céramiques faites main, coffrets cadeaux — chaque produit
            porte l'esprit de notre atelier parisien.
          </p>

          {/* Two feature pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#d4c9b5', maxWidth: '380px' }}>
            {[
              { label: 'Cafés rares', sub: 'Grains sélectionnés par nos experts barista' },
              { label: 'Céramiques', sub: 'Pièces uniques façonnées dans notre atelier' }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#f5f0e8',
                padding: '1.4rem 1.8rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'
              }}>
                <div>
                  <p style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.2rem' }}>{item.label}</p>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem',
                    color: '#8a7c6e', lineHeight: 1.5
                  }}>{item.sub}</p>
                </div>
                <span style={{ color: '#3d5a3e', fontSize: '1.2rem', flexShrink: 0 }}>→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
          <img
            src="/cafe-ceramique-laccord-parfait.webp"
            alt="Collection boutique"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '2rem', left: '2rem',
            background: 'rgba(245,240,232,0.92)',
            padding: '1rem 1.5rem',
            backdropFilter: 'blur(4px)'
          }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
              letterSpacing: '0.25em', textTransform: 'uppercase', color: '#8a7c6e'
            }}>Livraison Paris</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 400 }}>Sous 48h</p>
          </div>
        </div>
      </section>

      {/* ── PRODUITS EN VEDETTE ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#8a7c6e', marginBottom: '0.6rem'
            }}>Sélection</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 300 }}>
              Nos produits en vedette
            </h2>
          </div>
          <a href="#" style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#3d5a3e', textDecoration: 'none',
            borderBottom: '1px solid #3d5a3e', paddingBottom: '2px'
          }}>Voir tout →</a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2px', background: '#d4c9b5'
        }}>
          {products.map((p, i) => (
            <article key={i} style={{ background: '#f5f0e8', overflow: 'hidden' }}>
              {/* Image */}
              <div style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <span style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  fontFamily: "'Montserrat', sans-serif", fontSize: '0.6rem',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: '#faf7f2', background: '#3d5a3e',
                  padding: '0.25rem 0.7rem'
                }}>{p.tag}</span>
              </div>

              {/* Info */}
              <div style={{ padding: '1.8rem 2rem 2.2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: '0.84rem',
                  color: '#6b5e52', lineHeight: 1.7, marginBottom: '1.5rem'
                }}>{p.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 400, color: '#3d5a3e' }}>{p.price}</span>
                  <button style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    background: '#1a1a14', color: '#faf7f2',
                    border: 'none', padding: '0.75rem 1.5rem',
                    cursor: 'pointer', transition: 'background 0.2s'
                  }}
                    onMouseEnter={e => e.target.style.background = '#3d5a3e'}
                    onMouseLeave={e => e.target.style.background = '#1a1a14'}
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── BANNIÈRE LIVRAISON ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2px', background: '#d4c9b5'
      }} className="delivery-grid">
        {[
          { icon: '◎', label: 'Livraison Paris', detail: 'Sous 48h à domicile' },
          { icon: '◈', label: 'Click & Collect', detail: 'Retrait 25 Bd du Temple' },
          { icon: '◻', label: 'Emballage cadeau', detail: 'Offert sur demande' },
        ].map((item, i) => (
          <div key={i} style={{
            background: '#f5f0e8',
            padding: '2.5rem 2rem',
            display: 'flex', alignItems: 'center', gap: '1.5rem'
          }}>
            <span style={{ fontSize: '1.6rem', color: '#3d5a3e', flexShrink: 0 }}>{item.icon}</span>
            <div>
              <p style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.2rem' }}>{item.label}</p>
              <p style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: '0.78rem',
                color: '#8a7c6e'
              }}>{item.detail}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ATELIER ── */}
      <section style={{
        background: '#2a3a2b', color: '#faf7f2',
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '2rem'
      }}>
        <div style={{ maxWidth: '540px' }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#8fb591', marginBottom: '1rem'
          }}>Et si vous le faisiez vous-même ?</p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300,
            lineHeight: 1.1, marginBottom: '1rem'
          }}>
            Créez votre propre tasse<br />dans notre atelier
          </h2>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.9rem',
            color: '#b5c7b6', lineHeight: 1.8
          }}>
            Rejoignez l'un de nos ateliers céramique et repartez avec une pièce
            façonnée de vos propres mains.
          </p>
        </div>
        <a href="/workshops" style={{
          display: 'inline-block', padding: '1rem 2.5rem',
          background: '#faf7f2', color: '#2a3a2b',
          fontFamily: "'Montserrat', sans-serif", fontSize: '0.78rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          textDecoration: 'none', flexShrink: 0
        }}>Voir les ateliers</a>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Montserrat:wght@300;400;500&display=swap');
        @media (max-width: 768px) {
          .shop-hero { grid-template-columns: 1fr !important; }
          .delivery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}