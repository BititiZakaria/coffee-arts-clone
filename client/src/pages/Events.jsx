export default function Events() {
  const events = [
    {
      date: '14',
      month: 'Juin',
      year: '2025',
      tag: 'Soirée',
      title: 'Céramique & Café du Soir',
      desc: 'Une soirée intime autour du tournage et d\'un café de spécialité. Places limitées.',
      spots: '8 places restantes',
      time: '19h00 — 22h00',
    },
    {
      date: '21',
      month: 'Juin',
      year: '2025',
      tag: 'Team Building',
      title: 'Atelier Privé Entreprise',
      desc: 'Réservez notre espace pour un événement de team building créatif et mémorable.',
      spots: 'Sur demande',
      time: '10h00 — 13h00',
    },
    {
      date: '05',
      month: 'Juil',
      year: '2025',
      tag: 'Exposition',
      title: 'Lancement Collection Été',
      desc: 'Découvrez nos nouvelles pièces en céramique artisanale accompagnées de dégustations.',
      spots: 'Entrée libre',
      time: '18h00 — 21h30',
    },
  ]

  return (
    <main style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: '#f5f0e8', color: '#1a1a1a' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '72vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="/jennifer-burk-CHG8eMpD1Aw-unsplash.jpg"
          alt="Événements Coffee Arts"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,13,10,0.75) 40%, rgba(15,13,10,0.2) 100%)' }} />

        <div style={{
          position: 'relative', zIndex: 2,
          padding: 'clamp(2rem, 6vw, 5rem)',
          maxWidth: '700px'
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#c8b89a', marginBottom: '1.2rem'
          }}>Agenda</p>
          <h1 style={{
            color: '#faf7f2', fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 300, lineHeight: 1.0, letterSpacing: '-0.01em',
            marginBottom: '1.5rem'
          }}>
            Événements
          </h1>
          <p style={{
            color: '#c8b89a', fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)', lineHeight: 1.8,
            fontWeight: 300, maxWidth: '480px'
          }}>
            Soirées dégustation, ateliers privés, expositions — des moments conçus pour rassembler et inspirer.
          </p>
        </div>
      </section>

      {/* ── LISTE ÉVÉNEMENTS ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem'
        }}>
          <div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#8a7c6e', marginBottom: '0.6rem'
            }}>Prochains rendez-vous</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 300 }}>
              À venir
            </h2>
          </div>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.78rem',
            color: '#8a7c6e', letterSpacing: '0.05em'
          }}>25 boulevard du Temple, 75003 Paris</p>
        </div>

        {/* Event rows */}
        <div style={{ borderTop: '1px solid #d4c9b5' }}>
          {events.map((ev, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '90px 1fr auto',
              gap: '2rem',
              alignItems: 'center',
              padding: '2.5rem 0',
              borderBottom: '1px solid #d4c9b5',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(61,90,62,0.04)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {/* Date block */}
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1, color: '#3d5a3e' }}>{ev.date}</p>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8a7c6e'
                }}>{ev.month} {ev.year}</p>
              </div>

              {/* Info */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: '0.62rem',
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: '#faf7f2', background: '#3d5a3e',
                    padding: '0.2rem 0.7rem'
                  }}>{ev.tag}</span>
                  <span style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem',
                    color: '#8a7c6e', letterSpacing: '0.05em'
                  }}>{ev.time}</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400, marginBottom: '0.4rem' }}>{ev.title}</h3>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem',
                  color: '#6b5e52', lineHeight: 1.6, maxWidth: '500px'
                }}>{ev.desc}</p>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem',
                  letterSpacing: '0.1em', color: '#3d5a3e', marginTop: '0.7rem'
                }}>— {ev.spots}</p>
              </div>

              {/* CTA */}
              <div style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#3d5a3e', borderBottom: '1px solid #3d5a3e',
                paddingBottom: '2px', whiteSpace: 'nowrap'
              }}>
                Réserver →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TROIS TYPES D'ÉVÉNEMENTS ── */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2px', background: '#d4c9b5'
      }}
        className="events-grid"
      >
        {[
          {
            icon: '◎',
            title: 'Expérience immersive',
            desc: 'Participez à un moment unique avec créateurs et amateurs de café. Un soir à part.'
          },
          {
            icon: '◈',
            title: 'Art & culture',
            desc: 'Nos événements célèbrent les arts visuels, le design et le savoir-faire local parisien.'
          },
          {
            icon: '◻',
            title: 'Réservation facile',
            desc: 'Réservez vos places en quelques clics. Confirmation immédiate et accueil personnalisé.'
          }
        ].map((item, i) => (
          <div key={i} style={{
            background: i === 1 ? '#2a3a2b' : '#f5f0e8',
            color: i === 1 ? '#faf7f2' : '#1a1a1a',
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(2rem, 4vw, 3rem)',
            display: 'flex', flexDirection: 'column', gap: '1.2rem'
          }}>
            <span style={{ fontSize: '1.5rem', color: i === 1 ? '#8fb591' : '#3d5a3e' }}>{item.icon}</span>
            <h3 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', fontWeight: 400, lineHeight: 1.1 }}>{item.title}</h3>
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem',
              lineHeight: 1.7, color: i === 1 ? '#b5c7b6' : '#6b5e52'
            }}>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ── CTA PRIVATISATION ── */}
      <section style={{
        background: '#1a1a14', color: '#faf7f2',
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '2rem'
      }}>
        <div style={{ maxWidth: '560px' }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#8a7c6e', marginBottom: '1rem'
          }}>Privatisation</p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.1,
            marginBottom: '1rem'
          }}>Un événement sur mesure ?</h2>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.92rem',
            color: '#9a8e80', lineHeight: 1.8
          }}>
            Nous privatisons notre espace pour vos team buildings, lancements de produit
            ou soirées d'entreprise. Contactez-nous pour construire ensemble votre événement.
          </p>
        </div>
        <a href="mailto:coffeeartsparis@gmail.com" style={{
          display: 'inline-block', padding: '1rem 2.5rem',
          background: '#3d5a3e', color: '#faf7f2',
          fontFamily: "'Montserrat', sans-serif", fontSize: '0.78rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          textDecoration: 'none', flexShrink: 0
        }}>Nous contacter</a>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Montserrat:wght@300;400;500&display=swap');
        @media (max-width: 768px) {
          .events-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          [style*="gridTemplateColumns: '90px 1fr auto'"] {
            grid-template-columns: 60px 1fr !important;
          }
          [style*="gridTemplateColumns: '90px 1fr auto'"] > div:last-child {
            display: none;
          }
        }
      `}</style>
    </main>
  )
}