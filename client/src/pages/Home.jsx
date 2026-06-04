import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: '#f5f0e8', color: '#1a1a1a' }}>

      {/* ── HERO FULL-SCREEN VIDEO ── */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <video
          src="/VIDEO%20PAGE%20D'ACCUEIL.mp4"
          poster="/photo1.jpg"
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,18,14,0.45)' }} />

        {/* Floating socials */}
        <div className="floating-socials">
          <a href="#" aria-label="Instagram"><img src="/tiktok.png" alt="insta" /></a>
          <a href="#" aria-label="TikTok"><img src="/tiktok-green.png" alt="tiktok" /></a>
          <a href="#" aria-label="Pinterest"><img src="/tiktok-beige.png" alt="pinterest" /></a>
        </div>

        {/* Hero text centered */}
        <div style={{
          position: 'relative', zIndex: 2, height: '100%', width: '100%',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', textAlign: 'center',
          padding: 'clamp(2rem, 6vw, 5rem)'
        }}>
          <p style={{
            color: '#c8b89a', fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            marginBottom: '1.2rem', fontFamily: "'Montserrat', sans-serif", fontWeight: 400
          }}>
            Specialty coffee &amp; pottery studio
          </p>
          <h1 style={{
            color: '#faf7f2', fontSize: 'clamp(3.6rem, 9vw, 8.5rem)',
            fontWeight: 300, lineHeight: 1.02,
            letterSpacing: '-0.01em', marginBottom: '1.2rem', fontFamily: "'Cormorant Garamond', serif"
          }}>
            Sip, create<br />and connect
          </h1>
          <p style={{
            color: '#d4c9b5', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            maxWidth: '520px', lineHeight: 1.7,
            fontFamily: "'Montserrat', sans-serif", fontWeight: 300,
            marginBottom: '2.5rem'
          }}>
            Un lieu hybride où l'on vient savourer un café,<br />
            créer de ses mains et partager un moment, simplement.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/workshops" style={{
              display: 'inline-block', padding: '0.85rem 2.2rem',
              background: '#3d5a3e', color: '#faf7f2',
              fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'background 0.3s',
              border: 'none'
            }}
              onMouseEnter={e => e.target.style.background = '#2e4330'}
              onMouseLeave={e => e.target.style.background = '#3d5a3e'}
            >
              Réserver un atelier
            </Link>
            <Link to="/shop" style={{
              display: 'inline-block', padding: '0.85rem 2.2rem',
              background: 'transparent', color: '#faf7f2',
              fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              textDecoration: 'none', border: '1px solid rgba(250,247,242,0.55)',
              transition: 'border-color 0.3s, color 0.3s'
            }}
              onMouseEnter={e => { e.target.style.borderColor = '#faf7f2'; e.target.style.color = '#faf7f2' }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(250,247,242,0.55)'; e.target.style.color = '#faf7f2' }}
            >
              Découvrir la carte
            </Link>
          </div>

          {/* Address */}
          <p style={{
            marginTop: '1.4rem', color: 'rgba(250,247,242,0.85)', fontSize: '0.95rem',
            fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.02em'
          }}>
            25 boulevard du Temple, 75003 Paris
          </p>
        </div>
      </section>

      {/* ── TROIS EXPÉRIENCES ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem',
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: '#8a7c6e', marginBottom: '1rem'
        }}>
          Le concept
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300,
          letterSpacing: '-0.01em', marginBottom: '3.5rem',
          maxWidth: '600px', lineHeight: 1.2
        }}>
          Trois expériences, un même lieu
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2px', background: '#d9d0c0'
        }}>
          {[
            {
              tag: 'DÉGUSTER', title: 'Café', sub: 'Café de spécialité',
              desc: 'Des grains soigneusement sélectionnés, torréfiés avec soin. Chaque tasse raconte une histoire.',
              to: '/shop', cta: 'Découvrir la carte'
            },
            {
              tag: 'CRÉER', title: 'Ateliers', sub: 'Ateliers créatifs',
              desc: "Tournage, modelage, émaillage — vivez une expérience unique entre les mains et l'argile.",
              to: '/workshops', cta: 'Participer à un atelier'
            },
            {
              tag: 'EMPORTER', title: 'La boutique', sub: 'Pièces artisanales',
              desc: 'Tasses, bols et créations en céramique à emporter. Chaque pièce est unique, faite ici.',
              to: '/shop', cta: 'Explorer la boutique'
            }
          ].map((item, i) => (
            <div key={i} style={{
              background: '#f5f0e8', padding: '3rem 2.5rem',
              display: 'flex', flexDirection: 'column', gap: '1rem'
            }}>
              <span style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem',
                letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3d5a3e'
              }}>{item.tag}</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 400, lineHeight: 1 }}>{item.title}</h3>
              <p style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem',
                color: '#8a7c6e', letterSpacing: '0.05em'
              }}>{item.sub}</p>
              <p style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: '0.9rem',
                lineHeight: 1.7, color: '#4a4035', flexGrow: 1
              }}>{item.desc}</p>
              <Link to={item.to} style={{
                display: 'inline-block', marginTop: '0.5rem',
                fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#3d5a3e', textDecoration: 'none',
                borderBottom: '1px solid #3d5a3e', paddingBottom: '2px',
                width: 'fit-content'
              }}>{item.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDÉO IMMERSIVE ── */}
      <section style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '0', minHeight: '560px',
        flexWrap: 'wrap'
      }}
        className="video-split"
      >
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '380px' }}>
          <video
            src="/coffevideo.mp4"
            autoPlay muted loop playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{
          background: '#2a3a2b', color: '#faf7f2',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#8fb591', marginBottom: '1.5rem'
          }}>Au cœur de Coffee Arts</p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300,
            lineHeight: 1.15, marginBottom: '1.8rem'
          }}>
            Vivez l'expérience<br />Coffee Arts
          </h2>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.92rem',
            lineHeight: 1.8, color: '#c8d4c9', marginBottom: '2rem',
            maxWidth: '420px'
          }}>
            Plongez au cœur de notre atelier et découvrez la fusion du café et de la céramique.
            Une ambiance, un savoir-faire et des instants précieux partagés avec nos clients.
          </p>
          <ul style={{
            listStyle: 'none', padding: 0, margin: '0 0 2.5rem',
            display: 'flex', flexDirection: 'column', gap: '0.9rem'
          }}>
            {[
              'Atelier de poterie pour tous les niveaux',
              'Café de spécialité & produits artisanaux',
              'Événements culturels et soirées privées'
            ].map((item, i) => (
              <li key={i} style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem',
                color: '#b5c7b6', display: 'flex', alignItems: 'center', gap: '0.75rem'
              }}>
                <span style={{
                  width: '20px', height: '1px', background: '#8fb591',
                  display: 'inline-block', flexShrink: 0
                }} />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/workshops" style={{
            display: 'inline-block', padding: '0.85rem 2rem',
            background: '#faf7f2', color: '#2a3a2b',
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            textDecoration: 'none', width: 'fit-content',
            transition: 'opacity 0.2s'
          }}>
            Découvrir les ateliers
          </Link>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem'
        }}>
          <div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem',
              letterSpacing: '0.28em', textTransform: 'uppercase',
              color: '#8a7c6e', marginBottom: '0.6rem'
            }}>Galerie</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, lineHeight: 1.1 }}>
              Au cœur de Coffee Arts Paris
            </h2>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: '280px 280px',
          gap: '4px'
        }}>
          <div style={{ gridRow: '1 / 3', overflow: 'hidden' }}>
            <img
              src="/ceramic-pottery-workshop-hands-creating-clay-potte.jpg"
              alt="Atelier céramique"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s', cursor: 'pointer' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <img
              src="/cafe-ceramique-laccord-parfait.webp"
              alt="Café céramique"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s', cursor: 'pointer' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <img
              src="/PAGE%20D'ACCUEIL%20-%20PHOTO%201.jpg"
              alt="Coffee Arts accueil"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s', cursor: 'pointer' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          </div>
          <div style={{ overflow: 'hidden', gridColumn: '2 / 4' }}>
            <img
              src="/peinture-glacure-art-decoratif.avif"
              alt="Peinture glaçure"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s', cursor: 'pointer' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: '#1a1a14', color: '#faf7f2',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)',
        textAlign: 'center'
      }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#8a7c6e', marginBottom: '1.5rem'
        }}>Un moment autour du café et de la création</p>
        <h2 style={{
          fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300,
          lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '700px', margin: '0 auto 1.5rem'
        }}>
          Un lieu où l'on vient créer,<br />discuter et s'attarder.
        </h2>
        <p style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: '1rem',
          color: '#9a8e80', lineHeight: 1.8, maxWidth: '500px',
          margin: '0 auto 3rem'
        }}>
          Des moments simples, à vivre et à partager.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/workshops" style={{
            display: 'inline-block', padding: '1rem 2.5rem',
            background: '#3d5a3e', color: '#faf7f2',
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.78rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            textDecoration: 'none'
          }}>Découvrir les ateliers</Link>
          <Link to="/shop" style={{
            display: 'inline-block', padding: '1rem 2.5rem',
            background: 'transparent', color: '#faf7f2',
            fontFamily: "'Montserrat', sans-serif", fontSize: '0.78rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            textDecoration: 'none', border: '1px solid rgba(250,247,242,0.3)'
          }}>Accéder à la boutique</Link>
        </div>
      </section>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap');

        @media (max-width: 768px) {
          .video-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}