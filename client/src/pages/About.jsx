import { useEffect, useRef, useState } from "react";

const VALEURS = [
  {
    icon: "☕",
    title: "Le café comme point de départ",
    text: "Nous sommes avant tout un coffee shop, avec des boissons de qualité et une vraie exigence gustative. La création vient enrichir l'expérience, sans jamais la remplacer.",
  },
  {
    icon: "🤲",
    title: "La création comme prolongement",
    text: "Chez Coffee Arts Paris, la création n'est pas une performance. On vient pour essayer, apprendre, toucher et prendre plaisir au geste, simplement.",
  },
  {
    icon: "🏡",
    title: "Un espace où l'on se sent bien",
    text: "Coffee Arts Paris a été pensé comme un lieu calme et accueillant, où l'on peut s'attarder, se retrouver et faire une pause, seul ou à plusieurs.",
  },
];

const ENGAGEMENTS = [
  {
    num: "01",
    title: "Des emballages respectueux de la planète",
    text: "Tous nos emballages à emporter sont biodégradables, recyclables ou compostables. Nous privilégions des matériaux responsables pour réduire notre empreinte environnementale au quotidien.",
  },
  {
    num: "02",
    title: "Lutte contre le gaspillage alimentaire",
    text: "Parce que chaque produit mérite d'être respecté, nos invendus alimentaires sont redistribués à des associations locales. Rien ne se perd, tout se transforme.",
  },
  {
    num: "03",
    title: "Le marc de café, une seconde vie naturelle",
    text: "Chez Coffee Arts Paris, même notre marc de café continue son histoire. Récupéré et valorisé, il sert de compost ou de base pour des projets locaux et créatifs.",
  },
  {
    num: "04",
    title: "Créer autrement",
    text: "Coffee Arts Paris n'est pas seulement un coffee shop. C'est un lieu où l'on crée, partage et consomme autrement — avec intention, lenteur et conscience.",
  },
];

const ECO_CARDS = [
  {
    tag: "Café de spécialité",
    title: "Une exigence gustative au quotidien",
    text: "Sélection rigoureuse de cafés de spécialité, préparés avec soin par nos baristas. Chaque tasse est un moment de qualité, pensé pour vos sens.",
    cta: "Voir la carte",
  },
  {
    tag: "Ateliers céramique",
    title: "Créer de ses mains, à son rythme",
    text: "Des ateliers accessibles à tous les niveaux, guidés par des céramistes passionnés. Modelage, tournage, émaillage — l'argile n'attend que vous.",
    cta: "Réserver",
  },
  {
    tag: "La boutique",
    title: "Des pièces uniques à emporter",
    text: "Chaque pièce en boutique est façonnée par nos artisans. Tasses, bols, vases — des objets du quotidien élevés au rang d'art.",
    cta: "Explorer",
  },
  {
    tag: "Adresse",
    title: "25 boulevard du Temple, Paris 3e",
    text: "Mar–Ven 08h–20h · Sam–Dim 10h–21h\n07 66 91 82 94 · coffeeartsparis@gmail.com",
    cta: "Nous trouver",
  },
];

function useReveal() {
  const refs = useRef([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("cap-in"); }),
      { threshold: 0.12 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const addRef = (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };
  return addRef;
}

export default function About() {
  const [openEng, setOpenEng] = useState(null);
  const addRef = useReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --cap-beige: #F5F0E8;
          --cap-beige-dark: #EDE5D8;
          --cap-sand: #D9CEBF;
          --cap-brown: #3D2B1F;
          --cap-olive: #5C6B4A;
          --cap-text: #2A2018;
          --cap-muted: #8C7B6B;
          --cap-white: #FAFAF8;
          --cap-accent: #8B6914;
        }

        .cap-body { font-family: 'Jost', sans-serif; font-weight: 300; }

        /* ── HERO AVEC PHOTO ── */
        .cap-hero {
          position: relative;
          min-height: 520px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
        }
        .cap-hero-image {
          position: relative;
          overflow: hidden;
        }
        .cap-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          min-height: 520px;
          display: block;
        }
        .cap-hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 60%, rgba(237,229,216,0.15));
        }
        .cap-hero-content {
          background: var(--cap-beige-dark);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px;
          position: relative;
        }
        .cap-hero-content::before {
          content: '';
          position: absolute;
          left: -40px; top: 0; bottom: 0; width: 80px;
          background: var(--cap-beige-dark);
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 50%);
          z-index: 2;
        }
        .cap-eyebrow {
          font-size: 11px; font-weight: 500; letter-spacing: 0.3em;
          text-transform: uppercase; color: var(--cap-olive);
          margin-bottom: 20px; display: block;
        }
        .cap-hero-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 4.5vw, 64px);
          font-weight: 400; line-height: 1.1;
          color: var(--cap-brown); margin-bottom: 24px;
        }
        .cap-hero-content h1 em { font-style: italic; color: var(--cap-accent); }
        .cap-hero-content p {
          font-size: 15px; line-height: 1.85;
          color: var(--cap-muted); max-width: 400px; margin-bottom: 36px;
        }
        .cap-hero-address {
          font-size: 12px; font-weight: 500; letter-spacing: 0.15em;
          text-transform: uppercase; color: var(--cap-olive);
          display: flex; align-items: center; gap: 8px;
        }
        .cap-hero-address::before {
          content: ''; width: 24px; height: 1px; background: var(--cap-olive);
        }

        .cap-divider { height: 1px; background: var(--cap-sand); margin: 0 48px; }

        /* VALEURS */
        .cap-valeurs { padding: 96px 48px; }
        .cap-section-eyebrow {
          font-size: 11px; font-weight: 500; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--cap-olive);
          margin-bottom: 16px; display: block;
        }
        .cap-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 4vw, 52px); font-weight: 400;
          line-height: 1.15; color: var(--cap-brown); margin-bottom: 64px;
        }
        .cap-valeurs-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: var(--cap-sand);
        }
        .cap-valeur-card {
          background: var(--cap-beige); padding: 48px 36px;
          transition: background .35s;
        }
        .cap-valeur-card:hover { background: var(--cap-white); }
        .cap-valeur-icon {
          width: 40px; height: 40px; border: 1px solid var(--cap-sand);
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; margin-bottom: 28px; font-size: 18px;
        }
        .cap-valeur-card h3 {
          font-family: 'Playfair Display', serif; font-size: 20px;
          font-weight: 400; margin-bottom: 14px;
          color: var(--cap-brown); font-style: italic;
        }
        .cap-valeur-card p { font-size: 14px; line-height: 1.85; color: var(--cap-muted); }

        /* ENGAGEMENTS */
        .cap-engagements { padding: 96px 48px; background: var(--cap-brown); }
        .cap-engagements .cap-section-eyebrow { color: rgba(245,240,232,0.5); }
        .cap-engagements .cap-section-title { color: var(--cap-beige); }
        .cap-eng-item {
          display: grid; grid-template-columns: 64px 1fr 32px;
          align-items: start; gap: 32px;
          padding: 36px 0; border-bottom: 1px solid rgba(245,240,232,0.12);
          cursor: pointer;
        }
        .cap-eng-item:last-child { border-bottom: none; }
        .cap-eng-num {
          font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 400;
          color: rgba(245,240,232,0.2); line-height: 1; padding-top: 4px;
        }
        .cap-eng-title {
          font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 400;
          color: var(--cap-beige); margin-bottom: 12px;
        }
        .cap-eng-text {
          font-size: 14px; line-height: 1.85; color: rgba(245,240,232,0.55);
          overflow: hidden; transition: max-height .5s ease, opacity .4s ease;
        }
        .cap-eng-toggle {
          width: 32px; height: 32px; border: 1px solid rgba(245,240,232,0.25);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: rgba(245,240,232,0.5); font-size: 20px; flex-shrink: 0; margin-top: 4px;
          transition: transform .35s, border-color .3s; user-select: none;
        }

        /* ECO */
        .cap-eco { padding: 96px 48px; background: var(--cap-beige-dark); }
        .cap-eco-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 2px; background: var(--cap-sand); margin-top: 56px;
        }
        .cap-eco-card {
          background: var(--cap-beige-dark); padding: 52px 40px;
          transition: background .35s;
        }
        .cap-eco-card:hover { background: var(--cap-white); }
        .cap-eco-tag {
          font-size: 10px; font-weight: 500; letter-spacing: 0.25em;
          text-transform: uppercase; color: var(--cap-olive);
          margin-bottom: 20px; display: block;
        }
        .cap-eco-card h3 {
          font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 400;
          color: var(--cap-brown); margin-bottom: 16px; line-height: 1.25;
        }
        .cap-eco-card p { font-size: 14px; line-height: 1.85; color: var(--cap-muted); white-space: pre-line; }
        .cap-voir-plus {
          display: inline-flex; align-items: center; gap: 8px; margin-top: 20px;
          font-size: 12px; font-weight: 400; letter-spacing: 0.15em;
          text-transform: uppercase; color: var(--cap-olive); cursor: pointer;
          border-bottom: 1px solid rgba(92,107,74,0.3); padding-bottom: 4px;
          transition: gap .3s; background: none;
          border-top: none; border-left: none; border-right: none;
          font-family: 'Jost', sans-serif;
        }
        .cap-voir-plus:hover { gap: 14px; }

        /* CTA */
        .cap-cta { padding: 80px 48px; text-align: center; border-top: 1px solid var(--cap-sand); }
        .cap-cta h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 4vw, 48px); font-weight: 400; font-style: italic;
          color: var(--cap-brown); margin-bottom: 36px; line-height: 1.2;
        }
        .cap-btn-group { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .cap-btn-primary {
          background: var(--cap-brown); color: var(--cap-beige);
          padding: 14px 32px; font-size: 12px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; border: none; cursor: pointer;
          transition: background .3s; font-family: 'Jost', sans-serif;
        }
        .cap-btn-primary:hover { background: var(--cap-text); }
        .cap-btn-outline {
          background: transparent; color: var(--cap-brown);
          padding: 14px 32px; font-size: 12px; font-weight: 500; letter-spacing: 0.2em;
          text-transform: uppercase; border: 1px solid var(--cap-brown); cursor: pointer;
          transition: background .3s, color .3s; font-family: 'Jost', sans-serif;
        }
        .cap-btn-outline:hover { background: var(--cap-brown); color: var(--cap-beige); }

        /* REVEAL */
        .cap-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
        .cap-reveal.cap-in { opacity: 1; transform: translateY(0); }

        @media (max-width: 768px) {
          .cap-hero { grid-template-columns: 1fr; }
          .cap-hero-image { display: none; }
          .cap-hero-content::before { display: none; }
          .cap-valeurs-grid, .cap-eco-grid { grid-template-columns: 1fr; }
          .cap-hero-content,
          .cap-valeurs, .cap-engagements, .cap-eco, .cap-cta { padding-left: 24px; padding-right: 24px; }
          .cap-divider { margin: 0 24px; }
        }
      `}</style>

      <div className="cap-body" style={{ background: "var(--cap-beige)" }}>

        {/* HERO AVEC PHOTO */}
        <section className="cap-hero">
          <div className="cap-hero-image">
            <img src="/photo1.jpg" alt="Espace Coffee Arts" />
            <div className="cap-hero-image-overlay" />
          </div>
          <div className="cap-hero-content">
            <span className="cap-eyebrow">À propos</span>
            <h1>
              Nos<br />
              <em>engagements</em>
            </h1>
            <p>
              Une approche responsable, appliquée au quotidien — dans le café,
              la céramique, et la manière de recevoir.
            </p>
            <span className="cap-hero-address">25 boulevard du Temple, 75003 Paris</span>
          </div>
        </section>

        <div className="cap-divider" />

        {/* VALEURS */}
        <section className="cap-valeurs">
          <span className="cap-section-eyebrow">Nos valeurs</span>
          <h2 className="cap-section-title">
            Une manière d'être,<br />de créer et de recevoir.
          </h2>
          <div className="cap-valeurs-grid">
            {VALEURS.map((v, i) => (
              <div key={i} className="cap-valeur-card cap-reveal" ref={addRef}>
                <div className="cap-valeur-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ENGAGEMENTS */}
        <section className="cap-engagements">
          <span className="cap-section-eyebrow">Engagements écologiques</span>
          <h2 className="cap-section-title">
            Une attention portée aux matières,<br />aux ressources et aux gestes.
          </h2>
          {ENGAGEMENTS.map((e, i) => (
            <div
              key={i}
              className="cap-eng-item cap-reveal"
              ref={addRef}
              onClick={() => setOpenEng(openEng === i ? null : i)}
            >
              <div className="cap-eng-num">{e.num}</div>
              <div>
                <div className="cap-eng-title">{e.title}</div>
                <div
                  className="cap-eng-text"
                  style={{ maxHeight: openEng === i ? "200px" : "0", opacity: openEng === i ? 1 : 0 }}
                >
                  {e.text}
                </div>
              </div>
              <div
                className="cap-eng-toggle"
                style={{ transform: openEng === i ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </div>
            </div>
          ))}
        </section>

        {/* ECO GRID */}
        <section className="cap-eco">
          <span className="cap-section-eyebrow">Notre lieu</span>
          <h2 className="cap-section-title">
            Un espace pensé pour<br />l'humain et la création.
          </h2>
          <div className="cap-eco-grid">
            {ECO_CARDS.map((c, i) => (
              <div key={i} className="cap-eco-card cap-reveal" ref={addRef}>
                <span className="cap-eco-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <button className="cap-voir-plus">{c.cta} →</button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cap-cta">
          <h2>Un moment autour du café<br />et de la création.</h2>
          <div className="cap-btn-group">
            <button className="cap-btn-primary">Réserver un atelier</button>
            <button className="cap-btn-outline">Accéder à la boutique</button>
          </div>
        </section>

      </div>
    </>
  );
}